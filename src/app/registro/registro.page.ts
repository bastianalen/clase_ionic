import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private animationCtrl: AnimationController, public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }
}
