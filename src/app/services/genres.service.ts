import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  public apiKey = '25a2456bb2af85399403dbfef6b76c6e';
  public baseUrl = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) { }

  getGenreMovies(): Observable<any> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  
}
