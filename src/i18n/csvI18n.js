import { useEffect, useMemo, useState } from 'react'

// Simple CSV parsing and i18n lookup backed by TEXT_1.csv
// Expected columns: location, zh-TW, en, ja, vi

let i18nCache = null
let i18nLoadPromise = null
// Try to resolve CSV via bundler; fallback to public path
let CSV_URL = '/TEXT_1.csv'
try {
  // Vite replaces new URL(..., import.meta.url) with built asset URL
  // The CSV lives at project root
  // eslint-disable-next-line no-undef
  CSV_URL = new URL('../../TEXT_1.csv', import.meta.url).href
} catch {}

const stripBOM = (s) => (s.charCodeAt(0) === 0xfeff ? s.slice(1) : s)

function parseCSV(text) {
  const rows = []
  let i = 0
  const s = stripBOM(text)
  const len = s.length
  const pushRow = (row) => rows.push(row)
  while (i < len) {
    const row = []
    let field = ''
    let inQuotes = false
    while (i < len) {
      const ch = s[i]
      if (inQuotes) {
        if (ch === '"') {
          if (s[i + 1] === '"') {
            field += '"'
            i += 2
            continue
          } else {
            inQuotes = false
            i++
            continue
          }
        } else {
          field += ch
          i++
          continue
        }
      } else {
        if (ch === '"') {
          inQuotes = true
          i++
          continue
        }
        if (ch === ',') {
          row.push(field)
          field = ''
          i++
          continue
        }
        if (ch === '\n') {
          row.push(field)
          field = ''
          i++
          break
        }
        if (ch === '\r') {
          // swallow CR in CRLF
          i++
          if (s[i] === '\n') i++
          row.push(field)
          field = ''
          break
        }
        field += ch
        i++
      }
    }
    // Last line without newline
    if (field !== '' || row.length) {
      if (row.length === 0 && field === '') {
        // skip empty trailing line
      } else {
        if (row.length === 0 && field !== '') {
          row.push(field)
        }
        if (row.length && row[row.length - 1] !== field) {
          // if we broke on EOF without newline
          // but didn't push the last field yet
          // push now
          if (field !== '') row.push(field)
        }
        // Normalize to 5 columns if possible
        pushRow(row)
      }
    }
  }
  return rows.filter((r) => r.some((c) => c && c.trim() !== ''))
}

function buildMap(rows) {
  const map = {}
  for (let idx = 0; idx < rows.length; idx++) {
    const row = rows[idx]
    if (row.length < 2) continue
    const loc = row[0]
    if (!/src\//.test(loc)) continue // skip header or invalid
    // loc is like: path:line key
    const spaceIdx = loc.indexOf(' ')
    if (spaceIdx === -1) continue
    const before = loc.slice(0, spaceIdx)
    const key = loc.slice(spaceIdx + 1).trim()
    const colonIdx = before.lastIndexOf(':')
    const file = colonIdx !== -1 ? before.slice(0, colonIdx) : before

    const zh = row[1] ?? ''
    const en = row[2] ?? ''
    const ja = row[3] ?? ''
    const vi = row[4] ?? ''

    if (!map[file]) map[file] = {}
    map[file][key] = { 'zh-TW': zh, en, ja, vi }
  }
  return map
}

async function loadI18n() {
  if (i18nCache) return i18nCache
  if (!i18nLoadPromise) {
    i18nLoadPromise = fetch(CSV_URL)
      .then((r) => r.text())
      .then((text) => buildMap(parseCSV(text)))
      .catch(() => ({}))
      .then((map) => {
        i18nCache = map
        return map
      })
  }
  return i18nLoadPromise
}

export function useCsvI18n() {
  const [ready, setReady] = useState(!!i18nCache)
  useEffect(() => {
    let alive = true
    if (!i18nCache) {
      loadI18n().then(() => {
        if (alive) setReady(true)
      })
    }
    return () => {
      alive = false
    }
  }, [])

  const t = useMemo(() => {
    return (file, key, lang, fallback = '') => {
      const m = i18nCache
      const byFile = m?.[file]
      const entry = byFile?.[key]
      if (!entry) return fallback
      const val = entry[lang]
      if (val && String(val).trim() !== '') return val
      // Fallback to English, then any available
      if (entry.en && String(entry.en).trim() !== '') return entry.en
      return fallback
    }
  }, [ready])

  return { t, ready }
}

export function getCsvI18nSync(file, key, lang, fallback = '') {
  const m = i18nCache
  const byFile = m?.[file]
  const entry = byFile?.[key]
  if (!entry) return fallback
  const val = entry[lang]
  if (val && String(val).trim() !== '') return val
  if (entry.en && String(entry.en).trim() !== '') return entry.en
  return fallback
}
