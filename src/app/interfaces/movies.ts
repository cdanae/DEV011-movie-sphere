export interface Movie {
    title: string;
    release_date: string;
    poster_path: string;
}

export interface MovieResponse {
    results: Movie[];
}
