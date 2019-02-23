import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})



export class Tab5Page implements OnInit {
  public phppage = [
  {
  title: 'PHP HOME',
  detail: '',
  },
  {
  title: 'PHP Echo / Print',
  detail: 'wewewewew',
  },
  {
  title: 'PHP Data Types',
  detail: 'wewewewew',
  },
  {
  title: 'PHP If...Else...Elseif',
  detail: 'wewewewew',
  },
  {
  title: 'PHP Switch',
  detail: 'wewewewew',
  }
  ,
  {
  title: 'PHP While Loops',
  detail: 'wewewewew',
  }
  ,
  {
  title: 'PHP For Loops',
  detail: 'wewewewew',
  },
  {
  title: 'PHP Form Handling',
  detail: 'wewewewew',
  },
  {
  title: 'PHP Date and Time',
  detail: 'wewewewew',
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
