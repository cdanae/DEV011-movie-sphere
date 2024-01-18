import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GenresService } from '../../services/genres.service';
//import genres from './genres';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genres: any[] = [];
  selectedOptionGenre: string = '';
  filterMovies: any[] = [];  


  @Output() filterResults = new EventEmitter<string>();
  @Output() selectedFilter = new EventEmitter<string>();

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenreMovies().subscribe(
      (data: any) => {
        this.genres = data.genres
      },
      (error) => {
        console.error('Error al obtener generos: ', error);

      }
    )
  }

  applyFilter(): void {
    console.log('Género seleccionado:', this.selectedOptionGenre);
    this.selectedFilter.emit(this.selectedOptionGenre)
    /* const url = `${this.genresService.baseUrl}/discover/movie?with_genres=${this.selectedOptionGenre}&api_key=${this.genresService.apiKey}`;
    console.log('URL de filtrado:', url);

    if (this.selectedOptionGenre) {
      this.genresService.getFilterByGenre(this.selectedOptionGenre).subscribe(
        (filterMovies: any) => {
          this.filterMovies = filterMovies.results;
          console.log('Resultados de filtrado:', filterMovies);

        },
        (error) => {
          console.error('Error al filtrar películas:', error);
        }
      );
    } else {
      this.filterMovies = [];
    }
 */
  }

}
