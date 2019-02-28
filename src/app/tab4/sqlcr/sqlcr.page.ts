import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqlcr',
  templateUrl: './sqlcr.page.html',
  styleUrls: ['./sqlcr.page.scss'],
})
export class SqlcrPage implements OnInit {
  public lo =[
    {k: "{",
    l: "}",
    n: "[",
    m: "]"

  }]
  constructor() { }

  ngOnInit() {
  }

}
