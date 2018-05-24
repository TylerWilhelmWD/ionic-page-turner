import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TOCPage } from '../toc/toc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openTOC() {
    this.nav.push(TOCPage)
  }

}
