import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

constructor(private router: Router) {

}
gohtml(){
  this.router.navigateByUrl('/tabs/tab5');
 }
 gocss(){
   this.router.navigateByUrl('/tabs/tab3');
  }
  gosql(){
    this.router.navigateByUrl('/tabs/tab4');
   }
   gophp(){
     this.router.navigateByUrl('/tabs/tab5');
    }

}
