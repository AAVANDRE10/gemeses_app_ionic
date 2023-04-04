import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-clubes-desportivos',
  templateUrl: './clubes-desportivos.page.html',
  styleUrls: ['./clubes-desportivos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ClubesDesportivosPage implements OnInit {

  constructor() { }
  imagens = ['assets/GCDR.jpeg', 'assets/GCDR2.jpg'];
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
