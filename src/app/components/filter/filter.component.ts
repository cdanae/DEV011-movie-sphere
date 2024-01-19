import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre';
import { Movie } from 'src/app/interfaces/movies';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genres: Genre[] = [];
  selectedOptionGenre: string = '';
  filterMovies: Genre[] = [];

  @Output() selectedFilter = new EventEmitter<string>();

  constructor(private genresService: GenreService) { }

  ngOnInit(): void {
    this.genresService.getGenreList().subscribe(
      (data: { genres: Genre[] }) => {
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
  }

}
