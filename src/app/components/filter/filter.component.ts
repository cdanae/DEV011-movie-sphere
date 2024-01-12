import { Component, Input, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import genres from './genres';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genres: any[] = [];

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenreMovies().subscribe(
      (data: any) => {
        //this.genres = data.genres  
        this.genres = data.genres
      }
    )
  }

}
