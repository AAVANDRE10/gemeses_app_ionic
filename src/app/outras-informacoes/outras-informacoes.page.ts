import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-outras-informacoes',
  templateUrl: './outras-informacoes.page.html',
  styleUrls: ['./outras-informacoes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OutrasInformacoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
