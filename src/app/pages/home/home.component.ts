import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { TmdbService } from 'src/app/services/tmdb.service';
/* import  {movies}  from './response';
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  procesedMovies: Movie[] = [];
  selectedFilter: string = '';
  selectedOrder: string = '';

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getDiscoverMovies().subscribe(data => {
      this.procesedMovies = data.results;
    })
   /*  this.movies = movies.results; */
    //ngOnChanges, detectar cuando cambie mi valor de filtros, ejecutar la funcion applyfilter o probar con observab;e
    //escuchar tambien paginacion
  }

  applyFilter(): void {

    this.tmdbService.getFilteredMovies(this.selectedFilter, this.selectedOrder).subscribe(
      (filterMovies: any) => {
        this.procesedMovies = filterMovies.results;
        console.log('Resultados de filtrado:', this.procesedMovies);

      },
      (error) => {
        console.error('Error al filtrar películas:', error);

      }
    );
  }
}
