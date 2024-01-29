import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../interfaces/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiKey = '25a2456bb2af85399403dbfef6b76c6e';
  private baseUrl = 'https://api.themoviedb.org/3/movie'; 

  constructor(private http: HttpClient) { }

  getDetailsMovies(id: number): Observable<Details> {
    const url = `${this.baseUrl}/${id}?api_key=${this.apiKey}`;
    console.log('Solicitud a la API:', this.http.get<Details>(url));

    return this.http.get<Details>(url);
  }
}
