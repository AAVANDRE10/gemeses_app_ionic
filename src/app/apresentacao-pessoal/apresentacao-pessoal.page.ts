import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-apresentacao-pessoal',
  templateUrl: './apresentacao-pessoal.page.html',
  styleUrls: ['./apresentacao-pessoal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ApresentacaoPessoalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
