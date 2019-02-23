import { Component, OnInit, } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-htmldetail',
  templateUrl: './htmldetail.page.html',
  styleUrls: ['./htmldetail.page.scss'],
})
export class HtmldetailPage implements OnInit {
 item;
  constructor(params: NavParams) {
    this.item = params.data.item;
   }

  ngOnInit() {
  }

}
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Navigation</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  <ion-list>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-start></ion-icon>
      {{ item.title }}
    </button>
  </ion-list>
</ion-content>
`
})
export class BasicPage {
  items =[];
  constructor(public nav: NavController){
  this.items = [
    {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      }, ]
}
 htmldetail(item){
   this.nav.push(HtmldetailPage);
 }
}
