# Rana Guest House Website

A production-ready Next.js website for Rana Guest House in Baragaon, Joshimath.

## Features

✅ 7 Complete Pages (Home, Rooms, Packages, Gallery, Nearby, About, Contact)
✅ Responsive Design with Mobile Menu
✅ SEO Optimized with Meta Tags
✅ Click-to-Call & WhatsApp Integration
✅ Image Placeholders (ready for real images)
✅ Sticky Header Navigation
✅ Professional Footer
✅ Google Fonts (Playfair Display & Poppins)
✅ Sitemap & Robots.txt

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Export Static Site

```bash
npm run build
npm run export
```

The static files will be in the `out` folder.

## Project Structure

```
rana-guest-house/
├── components/          # React components
│   ├── Layout.js       # Main layout wrapper
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── SEO.js          # SEO meta tags
│   └── ImagePlaceholder.js
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── rooms.js        # Rooms & rates
│   ├── packages.js     # Trek packages
│   ├── gallery.js      # Photo gallery
│   ├── nearby.js       # Nearby attractions
│   ├── about.js        # About us
│   └── contact.js      # Contact page
├── public/             # Static files
│   ├── robots.txt
│   └── sitemap.xml
└── styles/
    └── globals.css     # Global styles
```

## Deployment Options

### 1. Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### 2. Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### 3. Static Export (Any Host)

```bash
npm run build
npm run export
```

Upload the `out` folder to any static hosting (GitHub Pages, AWS S3, etc.)

## Customization

### Adding Real Images

Replace the `ImagePlaceholder` components with actual images:

```javascript
// Before
<ImagePlaceholder text="Room Image" />

// After
<Image src="/images/room1.jpg" alt="Room" width={400} height={300} />
```

### Updating Contact Information

Edit the contact details in:
- `components/Footer.js`
- `pages/contact.js`

### Changing Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --primary-blue: #1e4d6f;
  --secondary-gold: #c9a87c;
}
```

## Contact Information

- **Amol Rana**: +91 8979702574
- **Anshul Rana**: +91 9368254360
- **Akshay Rana**: +91 9368297566
- **Email**: stay@himalayanhomestay.com

## License

Private - All rights reserved by Rana Guest House
