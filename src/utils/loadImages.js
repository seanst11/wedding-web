// Vite-only helpers to eager-import images from specific folders
// Place your images under:
// - src/assets/main  -> Hero slider (homepage)
// - src/assets/story -> Story timeline (ordered by filename)
// - src/assets/album -> Album grid (bottom)

const sortByFilename = (paths) =>
  paths.sort((a, b) => {
    const ac = /collage/i.test(a)
    const bc = /collage/i.test(b)
    if (ac && !bc) return 1
    if (!ac && bc) return -1
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  })

const toUrls = (modules) =>
  sortByFilename(Object.keys(modules)).map((p) => {
    const mod = modules[p]
    return mod && (mod.default || mod)
  })

export const loadMainImages = () => {
  const modules = {
    ...import.meta.glob('../assets/main/*.{png,jpg,jpeg,jfif,webp,avif,svg}', {
      eager: true
    }),
    ...import.meta.glob('../assets/main/**/*.{png,jpg,jpeg,jfif,webp,avif,svg}', {
      eager: true
    }),
    ...import.meta.glob('../assets/main/*.{PNG,JPG,JPEG,JFIF,WEBP,AVIF,SVG}', {
      eager: true
    }),
    ...import.meta.glob('../assets/main/**/*.{PNG,JPG,JPEG,JFIF,WEBP,AVIF,SVG}', {
      eager: true
    })
  }
  return toUrls(modules)
}

export const loadStoryImages = () => {
  const modules = {
    ...import.meta.glob('../assets/story/*.{png,jpg,jpeg,jfif,webp,avif,svg}', {
      eager: true
    }),
    ...import.meta.glob('../assets/story/**/*.{png,jpg,jpeg,jfif,webp,avif,svg}', {
      eager: true
    }),
    ...import.meta.glob('../assets/story/*.{PNG,JPG,JPEG,JFIF,WEBP,AVIF,SVG}', {
      eager: true
    }),
    ...import.meta.glob('../assets/story/**/*.{PNG,JPG,JPEG,JFIF,WEBP,AVIF,SVG}', {
      eager: true
    })
  }
  return toUrls(modules)
}

export const loadAlbumImages = () => {
  const modules = {
    ...import.meta.glob('../assets/album/*.{png,jpg,jpeg,jfif,webp,avif,svg}', {
      eager: true
    }),
    ...import.meta.glob('../assets/album/**/*.{png,jpg,jpeg,jfif,webp,avif,svg}', {
      eager: true
    }),
    ...import.meta.glob('../assets/album/*.{PNG,JPG,JPEG,JFIF,WEBP,AVIF,SVG}', {
      eager: true
    }),
    ...import.meta.glob('../assets/album/**/*.{PNG,JPG,JPEG,JFIF,WEBP,AVIF,SVG}', {
      eager: true
    })
  }
  return toUrls(modules)
}
