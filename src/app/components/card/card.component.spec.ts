import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.movie = {
      title: 'Movie Title',
      release_date: '2023-01-01',
      poster_path: '/movie-poster-path.jpg'
    };
    fixture.detectChanges();
  });

  it('debería mostrar la información de la película en el componente', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const titleElement = cardElement.querySelector('.card-title');
    const subtitleElement = cardElement.querySelector('.card-subtitle');
    const imageElement: HTMLImageElement | null = cardElement.querySelector('.card-image');

    expect(titleElement?.textContent).toContain('Movie Title');
    expect(subtitleElement?.textContent).toContain('2023-01-01');
    expect(imageElement?.src).toContain('/movie-poster-path.jpg');
  });
});


