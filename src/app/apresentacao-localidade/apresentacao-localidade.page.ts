import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-apresentacao-localidade',
  templateUrl: './apresentacao-localidade.page.html',
  styleUrls: ['./apresentacao-localidade.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ApresentacaoLocalidadePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
