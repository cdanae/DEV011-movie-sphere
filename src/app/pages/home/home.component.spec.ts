import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('debería renderizar el componente app-cards-container', () => {
    fixture.detectChanges();
    const cardsContainer = fixture.nativeElement.querySelector('app-cards-container');
    expect(cardsContainer).toBeTruthy();
  });

  it('debería tener el método ngOnInit', () => {
    expect(component.ngOnInit).toBeDefined();
  });
});

