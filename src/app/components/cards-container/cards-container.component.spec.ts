import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsContainerComponent } from './cards-container.component';
import { TmdbService } from '../../services/tmdb.service';
import { of } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';

describe('CardsContainerComponent', () => {
  let component: CardsContainerComponent;
  let fixture: ComponentFixture<CardsContainerComponent>;
  let mockTmdbService: Partial<TmdbService>;

  beforeEach(async () => {
    mockTmdbService = {
      getDiscoverMovies: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [
        CardsContainerComponent,
      ],
      imports: [
        // Agrega NgxPaginationModule a los imports del módulo de pruebas
        NgxPaginationModule,
      ],
      providers: [{ provide: TmdbService, useValue: mockTmdbService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsContainerComponent);
    component = fixture.componentInstance;
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  it('should initialize movies array', () => {
    expect(component.movies).toEqual([]);
  });

  /* it('should call tmdbService.getDiscoverMovies on init and set movies', () => {
    const mockMovies = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
    (mockTmdbService.getDiscoverMovies as jest.Mock).mockReturnValue(of({ results: mockMovies }));

    fixture.detectChanges();

    expect(mockTmdbService.getDiscoverMovies).toHaveBeenCalled();
    expect(component.movies).toEqual(mockMovies);
  }); */
});
