import fs from 'fs';
import path from 'path';

function parseMarkdownTable(md) {
  const lines = md.split(/\r?\n/);
  const tableLines = lines.filter((l) => l.trim().startsWith('|'));

  const rows = [];
  for (const line of tableLines) {
    const trimmed = line.trim();
    if (/^\|\s*-{3,}/.test(trimmed)) continue; // separator row like | --- |
    // split by |, ignoring first and last empty due to leading/trailing pipe
    const cells = trimmed
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length === 0) continue;
    rows.push(cells);
  }

  if (rows.length === 0) return { header: [], data: [] };
  const header = rows[0];
  const data = rows.slice(1);
  return { header, data };
}

function toCsvCell(s) {
  if (s == null) return '';
  const str = String(s).replace(/\r?\n/g, ' ');
  const needsQuotes = /[",\n]/.test(str) || str.startsWith(' ') || str.endsWith(' ');
  const escaped = str.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
}

function main() {
  const root = process.cwd();
  const mdPath = path.join(root, 'TEXT.md');
  if (!fs.existsSync(mdPath)) {
    console.error('TEXT.md not found at project root');
    process.exit(1);
  }
  const md = fs.readFileSync(mdPath, 'utf8');
  const { header, data } = parseMarkdownTable(md);

  // Enhance: replace Story.jsx entries with full text parsed from source
  try {
    const storyPath = path.join(root, 'src', 'components', 'Story', 'Story.jsx');
    if (fs.existsSync(storyPath)) {
      const storySrc = fs.readFileSync(storyPath, 'utf8');

      // Helper to extract a balanced block starting at given index (pointing to '{' or '[')
      const extractBalanced = (code, startIdx) => {
        let i = startIdx;
        const startCh = code[i];
        const endCh = startCh === '{' ? '}' : startCh === '[' ? ']' : null;
        if (!endCh) return null;
        let depth = 0;
        let inStr = null; // ' or "
        for (; i < code.length; i++) {
          const ch = code[i];
          if (inStr) {
            if (ch === '\\') { i++; continue; }
            if (ch === inStr) inStr = null;
            continue;
          }
          if (ch === '"' || ch === '\'') { inStr = ch; continue; }
          if (ch === startCh) depth++;
          else if (ch === endCh) {
            depth--;
            if (depth === 0) return code.slice(startIdx, i + 1);
          }
        }
        return null;
      };

      // Locate per-language blocks using a tolerant search (quoted or bare keys)
      const findLangBlock = (code, key) => {
        const candidates = [
          `'${key}':`,
          `"${key}":`,
          `${key}:`
        ];
        let hit = -1;
        for (const pat of candidates) {
          const pos = code.indexOf(pat);
          if (pos !== -1 && (hit === -1 || pos < hit)) hit = pos;
        }
        if (hit === -1) return null;
        const braceIdx = code.indexOf('{', hit);
        if (braceIdx === -1) return null;
        return extractBalanced(code, braceIdx);
      };

      const parseLangData = (block) => {
        const getString = (label) => {
          const re = new RegExp(label + '\\s*:\\s*([\"\'])([\\s\\S]*?)\\1');
          const m = block.match(re);
          return m ? m[2] : '';
        };
        const title = getString('title');
        // timeline array
        const tlIdx = block.search(/timeline\s*:\s*\[/);
        let timeline = [];
        if (tlIdx >= 0) {
          const start = block.indexOf('[', tlIdx);
          const arrText = extractBalanced(block, start) || '';
          // Collect all title/description pairs in order
          const titles = Array.from(arrText.matchAll(/\btitle\s*:\s*(["\'])([\s\S]*?)\1/g)).map((m) => m[2]);
          const descs = Array.from(arrText.matchAll(/\bdescription\s*:\s*(["\'])([\s\S]*?)\1/g)).map((m) => m[2]);
          const len = Math.max(titles.length, descs.length);
          for (let i = 0; i < len; i++) {
            timeline.push({ title: titles[i] || '', description: descs[i] || '' });
          }
        }
        return { title, timeline };
      };

      const langs = ['zh-TW', 'en', 'ja', 'vi'];
      const storyData = {};
      for (const lang of langs) {
        const block = findLangBlock(storySrc, lang);
        if (block) storyData[lang] = parseLangData(block);
      }

      // Map header indices for languages; assume first column is location
      const langIndex = { 'zh-TW': 1, en: 2, ja: 3, vi: 4 };

      // Update rows for Story.jsx keys
      for (const row of data) {
        const loc = row[0] || '';
        if (!loc.startsWith('src/components/Story/Story.jsx')) continue;
        const parts = loc.split(' ');
        const keyPath = parts.slice(1).join(' ').trim();
        if (!keyPath) continue;
        for (const lang of langs) {
          const idx = langIndex[lang];
          const langObj = storyData[lang];
          if (!langObj) continue;
          let value = '';
          if (keyPath === 'title') {
            value = langObj.title;
          } else {
            const m = keyPath.match(/^timeline\[(\d+)\]\.(title|description)$/);
            if (m) {
              const i = parseInt(m[1], 10);
              const k = m[2];
              value = langObj.timeline[i] ? langObj.timeline[i][k] || '' : '';
            }
          }
          if (value) row[idx] = value;
        }
      }
    }
  } catch (e) {
    console.warn('Warning: failed to enrich from Story.jsx:', e.message);
  }

  if (!header.length || !data.length) {
    console.error('No table found or table is empty in TEXT.md');
    process.exit(2);
  }

  const csvLines = [];
  csvLines.push(header.map(toCsvCell).join(','));
  for (const row of data) {
    // ensure column count matches header; pad if shorter
    const cells = row.slice(0, header.length);
    while (cells.length < header.length) cells.push('');
    csvLines.push(cells.map(toCsvCell).join(','));
  }

  const outPath = path.join(root, 'TEXT.csv');
  // Write with UTF-8 BOM for better Excel compatibility on Windows
  const bom = Buffer.from([0xEF, 0xBB, 0xBF]);
  const body = Buffer.from(csvLines.join('\n'), 'utf8');
  fs.writeFileSync(outPath, Buffer.concat([bom, body]));
  console.log('Wrote', outPath, 'rows:', data.length);
}

main();
