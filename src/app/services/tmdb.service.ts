import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../interfaces/movies';
import { GenreResponse } from '../interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '25a2456bb2af85399403dbfef6b76c6e';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getDiscoverMovies(): Observable<MovieResponse> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
    return this.http.get<MovieResponse>(url);
  }

  getFilterByGenre(genreId: string): Observable<GenreResponse> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`
    return this.http.get<GenreResponse>(url)
  }

  getOrderBy(orderValue: string): Observable<MovieResponse> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&sort_by=${orderValue}`
    return this.http.get<MovieResponse>(url)
  }
}
