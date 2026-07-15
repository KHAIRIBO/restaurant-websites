# murox.studio beta

A modern, premium **dark restaurant website** built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

Created by **Khairi Bouzakher**.

## Features

- **Dark, premium design** — Playfair Display + Inter typography, glassmorphism, gradient accents, and scroll-reveal animations.
- **Sections** — hero, menu, gallery, reservation form, and footer.
- **Calm background music** — auto-plays on open with a mute toggle (track: "Weightless" by Marconi Union).
- **Watermark** — a tiled "Created by Khairi Bouzakher" overlay across the site.
- **Anti-capture verification** — if a visitor takes a screenshot (PrintScreen) or opens DevTools, the content blurs and a verification bar appears requesting the password (`khairibo90`) to restore viewing.
- **Responsive** — works on mobile and desktop.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx        # fonts, metadata, Gate wrapper
  page.tsx          # page composition
  globals.css       # theme + animations
components/
  Header.tsx        # nav bar
  Hero.tsx          # hero with background photo
  Menu.tsx          # dishes grid
  Gallery.tsx       # image gallery
  Reservation.tsx   # booking form
  Footer.tsx
  MusicPlayer.tsx   # calm music + mute toggle
  Reveal.tsx        # scroll-reveal animation
  Gate.tsx          # watermark + anti-capture verification
public/
  image.png         # background photo
```

## Assets

- Add your 3D chef cooking clip to `public/chef.mp4` for the video section.
- Add the licensed music track to `public/weightless.mp3` to embed audio.

## Demo

> Live site: https://restaurant-demokbo.netlify.app/

### Screenshots

| Screenshot 1 | Screenshot 2 | Screenshot 3 |
| --- | --- | --- |
| ![Screenshot 1](/screenshots/Screenshot%202026-07-15%20112721.png) | ![Screenshot 2](/screenshots/Screenshot%202026-07-15%20112732.png) | ![Screenshot 3](/screenshots/Screenshot%202026-07-15%20112746.png) |

| Screenshot 4 | Screenshot 5 |
| --- | --- |
| ![Screenshot 4](/screenshots/Screenshot%202026-07-15%20112756.png) | ![Screenshot 5](/screenshots/Screenshot%202026-07-15%20113914.png) |

To capture your own screenshots, run `npm run dev`, then save images into a
`docs/` folder and reference them above.

## Notes

The anti-capture behavior is **client-side only** and acts as a deterrent.
It is not a security boundary — the password and detection logic are visible
in the browser source. For real protection, use server-side authentication.

## License

[MIT](LICENSE) © 2026 Khairi Bouzakher.
