import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlbasic',
  templateUrl: './htmlbasic.page.html',
  styleUrls: ['./htmlbasic.page.scss'],
})
export class HtmlbasicPage implements OnInit {
public htmlbs =[
  {bk: "<body>",
  hk:"<html>",
  h:"</html>",
  b:"</body>",
  d:"<! DOCTYPE html>"
}

];
  constructor() { }

  ngOnInit() {
  }

}
