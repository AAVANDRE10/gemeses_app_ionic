import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule, MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {

  }
  verApresentacao_Localidade() {
    
    this.navCtrl.navigateForward('apresentacao-localidade');
    this.menuCtrl.toggle();
  }
  verIniciar() {
    this.navCtrl.navigateForward('inicial');
    this.menuCtrl.toggle();
  }
}

