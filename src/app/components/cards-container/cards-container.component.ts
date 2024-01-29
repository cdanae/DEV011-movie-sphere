import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  @Input() movies: Movie[] = [];
  public page!: number;

  constructor() { }

  ngOnInit(): void {
  }
}
