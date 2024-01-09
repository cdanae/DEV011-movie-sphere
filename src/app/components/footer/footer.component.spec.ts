import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería contener un párrafo con el texto del creador', () => {
    const footerElement: HTMLElement = fixture.nativeElement;
    const paragraphElement = footerElement.querySelector('footer p');
    expect(paragraphElement).toBeTruthy();
    expect(paragraphElement?.textContent).toContain('Creado por Carolina Danae Rodriguez Jimenez');
  });
  it('debería tener el método ngOnInit', () => {
    expect(component.ngOnInit).toBeDefined();
  });
});

