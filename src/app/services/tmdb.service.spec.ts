import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TmdbService } from './tmdb.service';

describe('TmdbService', () => {
  let service: TmdbService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TmdbService]
    });
    service = TestBed.inject(TmdbService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve movies from the API', () => {
    const dataMovies = {
      results: [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' }
      ]
    };

    service.getDiscoverMovies().subscribe((movies: any) => {
      expect(movies).toEqual(dataMovies); 
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/discover/movie?api_key=${service['apiKey']}`);
    expect(req.request.method).toBe('GET');
    req.flush(dataMovies); 
  });
});
