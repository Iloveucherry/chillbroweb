import { create } from 'zustand';

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  genre: string;
  artwork: string;
  previewUrl: string;
};

type PlayerState = {
  queue: Track[];
  currentTrack: Track | null;
  currentIndex: number;
  isPlaying: boolean;
  setQueue: (tracks: Track[]) => void;
  setCurrentTrack: (track: Track, index?: number) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
};

export const usePlayerStore = create<PlayerState>((set, get) => ({
  queue: [],
  currentTrack: null,
  currentIndex: 0,
  isPlaying: false,

  setQueue: (tracks) => set({ queue: tracks }),

  setCurrentTrack: (track, index) => set({
    currentTrack: track,
    currentIndex: index ?? get().queue.findIndex((item) => item.id === track.id),
    isPlaying: true,
  }),

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  playNext: () => {
    const queue = get().queue;
    if (!queue.length) return;
    const nextIndex = (get().currentIndex + 1) % queue.length;
    set({ currentTrack: queue[nextIndex], currentIndex: nextIndex, isPlaying: true });
  },

  playPrevious: () => {
    const queue = get().queue;
    if (!queue.length) return;
    const previousIndex = (get().currentIndex - 1 + queue.length) % queue.length;
    set({ currentTrack: queue[previousIndex], currentIndex: previousIndex, isPlaying: true });
  },
}));
