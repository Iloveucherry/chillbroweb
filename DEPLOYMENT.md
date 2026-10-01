# Chillbro Deployment to Google AI Studio

This guide walks through integrating Chillbro with Google AI Studio and preparing for deployment.

## Step 1: Set Up Google AI Studio

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Sign in with your Google account
3. Create a new project or use an existing one
4. Enable the Generative AI API
5. Generate an API key
6. Copy the API key to your `.env.local`:
   ```
   GOOGLE_API_KEY=your_key_here
   ```

## Step 2: Understand the AI Integration

Chillbro uses Google AI Studio (Gemini) for:
- Mood-based playlist recommendations
- Smart search suggestions
- Lyrics summaries
- Genre tagging

The AI is called from the backend route `/api/ai` to keep the API key secure.

## Step 3: Test AI Recommendations Locally

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Click "AI Mix" on the home page
3. The app will call Google AI Studio and display recommendations

## Step 4: Deploy the App

Choose your hosting:

### Option A: Firebase Hosting
```bash
firebase init hosting
firebase deploy
```

### Option B: Vercel
```bash
vercel deploy
```

### Option C: Railway
```bash
railway up
```

### Option D: Render
```bash
git push origin main
# Connect repo in Render dashboard
```

## Step 5: Set Environment Variables in Production

In your hosting platform's dashboard, add:
- `GOOGLE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## Step 6: Verify Deployment

1. Visit your deployed URL
2. Test the search functionality
3. Click "AI Mix" to verify AI integration
4. Test playlist creation
5. Test offline save functionality

## Troubleshooting

### AI recommendations not working
- Verify `GOOGLE_API_KEY` is set correctly
- Check API quota in Google Cloud Console
- Review API response in browser DevTools Network tab

### Firebase auth not working
- Verify Firebase credentials in `.env.local`
- Check Firebase console for enabled services
- Ensure Firestore security rules allow read/write

### Music player not playing
- Check browser console for audio errors
- Verify preview URLs are accessible
- Test in different browser

## Next Steps

1. Add more tracks to the catalog
2. Integrate real music APIs (Spotify, LastFM, etc.)
3. Implement user profiles and social features
4. Add offline downloading
5. Create mobile app (React Native)

## Support

For issues, check:
- [Google AI Studio Docs](https://ai.google.dev)
- [Firebase Docs](https://firebase.google.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
