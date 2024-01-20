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
  @Input() orderedMovies: Movie[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getDiscoverMovies().subscribe(data => {
      this.movies = data.results;
      this.filteredMovies = this.movies;
      this.orderedMovies = this.movies;

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

  applyOrder(selectedOrder: string): void {
    if (selectedOrder) {
      this.tmdbService.getOrderBy(selectedOrder).subscribe(
        (orderMovies: any) => {
          this.orderedMovies = orderMovies.results;
          console.log('Resultados de ordenado:', orderMovies);
          
        },
        (error) => {
          console.error('Error al ordenar películas:', error);
          
        }
      );
    } else {
      this.orderedMovies = [];
    }
  }

}
