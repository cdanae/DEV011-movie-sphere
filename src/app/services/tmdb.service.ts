import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '25a2456bb2af85399403dbfef6b76c6e';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
