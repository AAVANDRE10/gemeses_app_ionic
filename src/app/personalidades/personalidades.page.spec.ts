import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalidadesPage } from './personalidades.page';

describe('PersonalidadesPage', () => {
  let component: PersonalidadesPage;
  let fixture: ComponentFixture<PersonalidadesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
