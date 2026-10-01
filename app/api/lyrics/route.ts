export async function GET() {
  const tracks = [
    {
      id: '1',
      title: 'Midnight Echo',
      artist: 'Nova Drift',
      album: 'Night Signals',
      duration: 222,
      genre: 'Electronic',
      artwork: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
      previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: '2',
      title: 'Sunset Cruise',
      artist: 'Luna Harbor',
      album: 'Coastal Lights',
      duration: 258,
      genre: 'Indie',
      previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      artwork: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
    },
    {
      id: '3',
      title: 'Cloud Memory',
      artist: 'Aster Vale',
      album: 'Soft Static',
      duration: 178,
      genre: 'Lo-fi',
      previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'
    },
    {
      id: '4',
      title: 'Glass Horizon',
      artist: 'Sora Lane',
      album: 'Night Moves',
      duration: 312,
      genre: 'Synthwave',
      previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b'
    }
  ];

  return Response.json({ tracks });
}
