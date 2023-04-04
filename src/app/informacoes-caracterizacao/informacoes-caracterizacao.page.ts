import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-informacoes-caracterizacao',
  templateUrl: './informacoes-caracterizacao.page.html',
  styleUrls: ['./informacoes-caracterizacao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InformacoesCaracterizacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
