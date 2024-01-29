import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/interfaces/details';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsMovie: Details = {} as Details;

  constructor(
    private route: ActivatedRoute,
    private detailsService: DetailsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId: number = +params['id']; 

      this.detailsService.getDetailsMovies(movieId).subscribe(data => {
        this.detailsMovie = data;
        console.log('Detalles de la película:',this.detailsMovie);

      });
    });
  }

}
