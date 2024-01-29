import { Genre } from "./genre";

export interface Details {
  genres: Genre[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
