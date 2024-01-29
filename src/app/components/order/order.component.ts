import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  selectedOptionOrder: string = 'popularity.desc';
  orderMovies: Movie[] = [];

  @Output() selectedOrder = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  applyOrder(): void {
    console.log('Tipo de ordenado seleccionado:', this.selectedOptionOrder);

    this.selectedOrder.emit(this.selectedOptionOrder)
  }

}
