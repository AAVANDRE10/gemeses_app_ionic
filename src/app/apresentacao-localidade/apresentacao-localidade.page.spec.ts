import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ApresentacaoLocalidadePage } from './apresentacao-localidade.page';

describe('ApresentacaoLocalidadePage', () => {
  let component: ApresentacaoLocalidadePage;
  let fixture: ComponentFixture<ApresentacaoLocalidadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApresentacaoLocalidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
