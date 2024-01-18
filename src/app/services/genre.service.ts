import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenreResponse } from '../interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiKey = '25a2456bb2af85399403dbfef6b76c6e';
  private baseUrl = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) { }

  getGenreList(): Observable<GenreResponse> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;
    return this.http.get<GenreResponse>(url)
  }
}
