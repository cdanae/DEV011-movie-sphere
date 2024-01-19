import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  @Input() filteredMovies: Movie[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getDiscoverMovies().subscribe(data => {
      this.movies = data.results;

      this.filteredMovies = this.movies
    })
  }

  applyFilter(selectedFilter: string): void {
    if (selectedFilter) {
      this.tmdbService.getFilterByGenre(selectedFilter).subscribe(
        (filterMovies: any) => {
          this.filteredMovies = filterMovies.results;
          console.log('Resultados de filtrado:', filterMovies);
          
        },
        (error) => {
          console.error('Error al filtrar películas:', error);
          
        }
      );
    } else {
      this.filteredMovies = [];
    }
  }

}
