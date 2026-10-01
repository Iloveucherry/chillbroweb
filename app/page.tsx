export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const trackId = searchParams.get('trackId');

  const lyricsMap: Record<string, string> = {
    '1': 'I hear the city breathing slow\nUnder a violet sky\nYou are the one I keep chasing\nIn the middle of the night',
    '2': 'Golden light on the open road\nTurning every corner into a memory\nWe keep the music low\nAnd let the evening carry us home',
    '3': 'Clouds are drifting, soft and slow\nMy thoughts become a quiet glow\nI leave the noise behind\nAnd let the rhythm guide my dreams',
    '4': 'You’re a signal in the dark\nA pulse beneath the moonlit rain\nEvery heartbeat feels like a spark\nPulling me back in again'
  };

  return Response.json({
    trackId,
    lyrics: lyricsMap[trackId ?? '1'] ?? lyricsMap['1']
  });
}
