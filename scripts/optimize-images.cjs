const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'src', 'assets', 'main');
const OUT_DIR = path.join(SRC_DIR, 'optimized');

const exts = new Set(['.jpg', '.jpeg', '.png', '.jfif']);

async function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, {recursive:true}); }

async function run(){
  await ensureDir(OUT_DIR);
  const files = fs.readdirSync(SRC_DIR).filter(f => exts.has(path.extname(f).toLowerCase()));
  if(files.length === 0){
    console.log('No source images in', SRC_DIR);
    return;
  }
  for(const f of files){
    const iPath = path.join(SRC_DIR, f);
    const base = path.parse(f).name;
    const outWebp = path.join(OUT_DIR, base + '.webp');
    const outJpg = path.join(OUT_DIR, base + '.jpg');
    try{
      const img = sharp(iPath).rotate();
      const meta = await img.metadata();
      const width = Math.min(1920, meta.width || 1920);
      // Create WebP
      await img.resize({width, withoutEnlargement:true})
        .webp({quality:82})
        .toFile(outWebp);
      // Create lightweight JPG fallback
      await sharp(iPath).rotate().resize({width, withoutEnlargement:true})
        .jpeg({quality:82, mozjpeg:true})
        .toFile(outJpg);
      console.log('Optimized:', f, '->', path.relative(process.cwd(), outWebp));
    }catch(err){
      console.error('Failed optimizing', f, err.message);
    }
  }
}

run();
