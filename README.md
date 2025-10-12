# Wedding Website - React

A beautiful, modern wedding website built with React and Vite, inspired by https://sungtaothuha.iwedding.info/

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Bilingual Support**: Toggle between English and Vietnamese
- **Smooth Animations**: Elegant fade-in and scroll animations
- **Interactive Components**:
  - Sticky navigation with smooth scrolling
  - Timeline-based love story section
  - Event schedule cards
  - Photo gallery with lightbox viewer
  - RSVP button integration

## Tech Stack

- React 18
- Vite
- CSS3 with animations
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd wedding-web-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

## Customization

### Update Wedding Details

1. **Couple Names**: Edit the `Hero.jsx` component
2. **Wedding Date**: Update in `Hero.jsx`
3. **Love Story**: Modify the timeline in `Story.jsx`
4. **Event Schedule**: Update events in `Schedule.jsx`
5. **Photos**: Replace image URLs in `Album.jsx`

### Change Colors

Edit the CSS variables in `App.css`:

```css
:root {
  --primary-color: #d4a574;  /* Gold/tan */
  --secondary-color: #f5f5f5; /* Light gray */
  --text-dark: #333;
  --text-light: #666;
  --white: #ffffff;
  --accent: #8b7355;          /* Brown */
}
```

### Add Your Photos

Replace the placeholder Unsplash URLs in `Album.jsx` with your own images:

```javascript
const images = [
  { id: 1, url: '/path/to/your/photo1.jpg', alt: 'Description' },
  // ... more images
]
```

## Project Structure

```
wedding-web-react/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Story/
│   │   │   ├── Story.jsx
│   │   │   └── Story.css
│   │   ├── Schedule/
│   │   │   ├── Schedule.jsx
│   │   │   └── Schedule.css
│   │   ├── Album/
│   │   │   ├── Album.jsx
│   │   │   └── Album.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/wedding-web",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## License

MIT License - Feel free to use this for your own wedding!

## Credits

- Design inspired by https://sungtaothuha.iwedding.info/
- Photos from Unsplash (placeholder images)
- Built with React + Vite

---

Made with ❤️ for Sean & Ha
