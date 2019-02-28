import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phpdat',
  templateUrl: './phpdat.page.html',
  styleUrls: ['./phpdat.page.scss'],
})
export class PhpdatPage implements OnInit {
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
