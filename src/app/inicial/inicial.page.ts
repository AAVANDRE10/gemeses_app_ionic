import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicialPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  iniciarAplicacao(){
  this.navCtrl.navigateForward('folder');
  }
}
