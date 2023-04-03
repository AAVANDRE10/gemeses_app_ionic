import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-turistico',
  templateUrl: './turistico.page.html',
  styleUrls: ['./turistico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TuristicoPage implements OnInit {

  constructor() { }

  imagens = ['assets/IMG.jpg', 'assets/IMG2.jpg'];
  indiceAtual = 0;

  proximaImagem() {
    this.indiceAtual++;
    if (this.indiceAtual >= this.imagens.length) {
      this.indiceAtual = 0;
    }
  }

  ngOnInit() {
  }

}
