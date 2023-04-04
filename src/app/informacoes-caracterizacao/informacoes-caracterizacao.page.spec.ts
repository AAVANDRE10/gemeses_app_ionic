import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacoesCaracterizacaoPage } from './informacoes-caracterizacao.page';

describe('InformacoesCaracterizacaoPage', () => {
  let component: InformacoesCaracterizacaoPage;
  let fixture: ComponentFixture<InformacoesCaracterizacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformacoesCaracterizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
