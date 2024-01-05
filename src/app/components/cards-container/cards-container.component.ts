import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  movies: any[] = [];
  public page!: number;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getDiscoverMovies().subscribe(data => {
      this.movies = data.results;     
    })
  }

}
