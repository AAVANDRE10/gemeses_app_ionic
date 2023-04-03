import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-personalidades',
  templateUrl: './personalidades.page.html',
  styleUrls: ['./personalidades.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PersonalidadesPage implements OnInit {

  constructor() { }
  imagens = ['assets/paulo_goncalves.jpg', 'assets/paulogoncalves2.jpg'];
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
