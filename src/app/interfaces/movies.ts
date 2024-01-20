export interface Movie {
    title: string;
    release_date: string;
    poster_path: string;
    genre_ids: object;
    
}

export interface MovieResponse {
    results: Movie[];
}
