import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
genres: Genre[] = [];

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

}
