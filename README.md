# Chillbro - Music Streaming App

A privacy-first, ad-free music streaming starter app built with Next.js, Firebase, and Google AI Studio.

## Quick Start

### Prerequisites
- Node.js 18+
- Firebase account
- Google AI Studio API key

### Setup

1. Clone and install:
```bash
git clone https://github.com/Iloveucherry/chillbroweb.git
cd chillbroweb
npm install
```

2. Create `.env.local` with your Firebase and AI credentials:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
GOOGLE_API_KEY=your_google_ai_studio_key
```

3. Run locally:
```bash
npm run dev
```

Open http://localhost:3000

## Features

- ✨ Music player with queue management
- 🔍 Search functionality
- 🎵 Playlist management
- 💾 Offline-ready saved tracks
- 🤖 AI-powered mood recommendations via Google AI Studio
- 🔐 Firebase Authentication
- 📱 Responsive design
- 🎨 Dark mode UI

## Architecture

- **Frontend**: Next.js 14 + React 18 + Tailwind CSS
- **State Management**: Zustand
- **Backend**: Next.js API routes
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **AI**: Google AI Studio (Gemini)
- **Hosting**: Firebase Hosting (production) or local dev

## File Structure

```
chillbroweb/
├── app/
│   ├── page.tsx              # Home page with search & player
│   ├── library/page.tsx      # Library page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── api/
│       ├── music/route.ts    # Music catalog API
│       ├── search/route.ts   # Search API
│       ├── ai/route.ts       # AI recommendations API
│       └── lyrics/route.ts   # Lyrics API
├── components/
│   ├── Header.tsx            # App header
│   ├── Sidebar.tsx           # Navigation sidebar
│   ├── MusicPlayer.tsx       # Player controls
│   ├── PlaylistCard.tsx      # Playlist UI
│   ├── LibraryPanel.tsx      # Library management
│   └── SignUpForm.tsx        # Auth form
├── lib/
│   ├── firebase.ts           # Firebase config
│   ├── auth.ts               # Auth utilities
│   ├── store.ts              # Zustand player store
│   ├── tracks.ts             # Track types
│   └── ai.ts                 # AI utilities
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind config
├── firebase.json             # Firebase config
└── README.md                 # This file
```

## Deployment

### Firebase Hosting

1. Build the app:
```bash
npm run build
```

2. Deploy:
```bash
firebase deploy
```

Your app will be live at `https://your-project.web.app`

## API Endpoints

- `GET /api/music` - Get all tracks
- `GET /api/search?q=query` - Search tracks
- `POST /api/ai` - Get AI recommendations
- `GET /api/lyrics?trackId=id` - Get track lyrics

## Environment Variables

See `.env.example` for all required variables.

## Legal Note

This is a starter app with placeholder audio. For a production music streaming service, you must:
- License music from copyright holders
- Use royalty-free sources
- Implement proper DRM if required
- Follow local regulations for audio streaming

## Tech Stack

- **Next.js** - Full-stack React framework
- **Firebase** - Backend, auth, database, hosting
- **Google AI Studio** - AI recommendations via Gemini
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **TypeScript** - Type safety
- **Lucide React** - Icons

## License

MIT

## Support

For issues or questions, open a GitHub issue in the repository.
