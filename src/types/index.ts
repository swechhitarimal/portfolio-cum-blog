export interface TilEntry {
  id: string;
  title: string;
  fact: string;
  category: string;
  date: string;
  tags: string[];
  favorite: boolean;
}

export interface Column {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  vibe: string;
}

export interface GardenNote {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  connections: string[];
  date: string;
  category: string;
  status: "sprouting" | "growing" | "evergreen";
}

export interface Curiosity {
  id: string;
  title: string;
  description: string;
  type: "article" | "video" | "quote" | "image" | "discovery";
  source: string;
  url: string;
  whyILoveIt: string;
}

export interface MonthlyRecap {
  id: string;
  month: string;
  year: number;
  favoriteMemory: string;
  favoriteSong: string;
  favoriteBook: string;
  biggestLesson: string;
  mood: string;
  photo: string;
  highlights: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  creator: string;
  type: "book" | "movie" | "show" | "podcast" | "music";
  status: "consuming" | "finished" | "abandoned";
  thoughts: string;
  rating?: number;
}

export interface TinyWin {
  id: string;
  title: string;
  date: string;
  story: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  body: string;
  mood: string;
  tags: string[];
}

export interface FunFact {
  id: string;
  fact: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
}

export interface Obsession {
  id: string;
  thing: string;
  why: string;
}

export interface Letter {
  id: string;
  to: string;
  message: string;
  date: string;
  mood: string;
}

export interface NavLink {
  label: string;
  href: string;
}
