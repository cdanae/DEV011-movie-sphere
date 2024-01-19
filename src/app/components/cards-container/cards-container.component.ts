import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  movies: Movie[] = [];
  @Input() filteredMovies: Movie[] = [];
  public page!: number;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getDiscoverMovies().subscribe(data => {
      this.movies = data.results;     
    })
    //como desuscribirse? antes de destruir el componente se debe desuscribir *buena practica* cuanod ya no hace falta ver esta data
  }
}
