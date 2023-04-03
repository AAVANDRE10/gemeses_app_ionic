import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ApresentacaoPessoalPage } from './apresentacao-pessoal.page';

describe('ApresentacaoPessoalPage', () => {
  let component: ApresentacaoPessoalPage;
  let fixture: ComponentFixture<ApresentacaoPessoalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApresentacaoPessoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
