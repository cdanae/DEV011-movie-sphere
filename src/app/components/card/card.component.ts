import { Component, Input, OnInit } from '@angular/core';
export interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() movie!: Movie;
  constructor() { }

  ngOnInit(): void {
  }
}
