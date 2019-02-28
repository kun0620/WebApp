import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqlin',
  templateUrl: './sqlin.page.html',
  styleUrls: ['./sqlin.page.scss'],
})
export class SqlinPage implements OnInit {
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
