import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqllike',
  templateUrl: './sqllike.page.html',
  styleUrls: ['./sqllike.page.scss'],
})
export class SqllikePage implements OnInit {
  public lo =[
    {k: "{",
    l: "}",}]
  constructor() { }

  ngOnInit() {
  }

}
