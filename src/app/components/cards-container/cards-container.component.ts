import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { FilterComponent } from '../filter/filter.component';
//import movies from './response';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  @Input() filteredMovies: any[] = [];
  movies: any[] = [];
  //public page!: number;
  public page: number = 1;


  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getDiscoverMovies().subscribe(data => {
      this.movies = data.results;
      this.filteredMovies = this.movies      
    })
  }

  applyFilter(filterList: any[]): void {
    console.log('applyFilter ejecutado');

    this.filteredMovies = filterList;
    this.page = 1;
  }
  //@ViewChild(FilterComponent) filterComponent!: FilterComponent;
  @ViewChild(FilterComponent, { static: false }) filterComponent!: FilterComponent;


  receiveFilteredResults(filteredResults: any[]): void {
    this.applyFilter(filteredResults);
}
}
