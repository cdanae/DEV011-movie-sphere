import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '25a2456bb2af85399403dbfef6b76c6e';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

   getDiscoverMovies(): Observable<any> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  } 
  
  getFilterByGenre(genreId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`)
  }
}
