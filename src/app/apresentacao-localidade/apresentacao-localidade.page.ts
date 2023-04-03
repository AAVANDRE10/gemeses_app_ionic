import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-apresentacao-localidade',
  templateUrl: './apresentacao-localidade.page.html',
  styleUrls: ['./apresentacao-localidade.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ApresentacaoLocalidadePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  turistico(){
    this.navCtrl.navigateForward('turistico');
  }

  personalidades(){
    this.navCtrl.navigateForward('personalidades');
  }

  clubesDesportivos(){
    this.navCtrl.navigateForward('clubesDesportivos');
  }

  informacoes(){
    this.navCtrl.navigateForward('informacoes');
  }
  
  ngOnInit() {
  }

}
