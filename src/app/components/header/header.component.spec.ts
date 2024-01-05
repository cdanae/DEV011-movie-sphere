import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería tener un elemento h1 con la clase .logo en el encabezado', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const logoElement = headerElement.querySelector('header .logo');
    expect(logoElement).toBeTruthy();
    expect(logoElement?.tagName).toBe('H1');
  });
  it('debería tener el método ngOnInit', () => {
    expect(component.ngOnInit).toBeDefined();
  });
});

