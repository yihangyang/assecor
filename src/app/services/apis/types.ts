export interface Base<T> {
  ret: number;
  message: string;
  data: T;
}

export interface Movie {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  title: string
}