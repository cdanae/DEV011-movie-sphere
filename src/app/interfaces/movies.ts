export interface Movie {
    title: string;
    release_date: string;
    poster_path: string;
    genre_ids: object;
    id: number;
}

export interface MovieResponse {
    results: Movie[];
}
