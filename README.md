# Chillbro

A lightweight starter app for a privacy-first, ad-free music streaming website inspired by the feel of ListenFree, but designed around the Chillbro brand.

## Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma + SQLite
- DaisyUI

## Features included
- Modern landing page
- Sidebar navigation
- Trending track list
- Playlist cards
- Mini music player UI
- Offline-ready architecture
- Prisma schema for users, tracks, and playlists

## Quick start
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Then open http://localhost:3000

## Notes
This is a starter app intended for rapid prototyping. The next upgrades are:
- real free music API integration
- user auth
- queue management and playback state
- playlist persistence
- lyrics API support
- offline download caching
