import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public sqlpage = [
  {
  title: 'SQL Intro',
  detail: '',
  },
  {
  title: 'SQL Create DB',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Drop DB',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Backup DB',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Select',
  detail: 'wewewewew',
  }
  ,
  {
  title: 'SQL Where',
  detail: 'wewewewew',
  }
  ,
  {
  title: 'SQL And, Or, Not',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Order By',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Insert Into',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Update',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Delete',
  detail: 'wewewewew',
  },
  {
  title: 'SQL Like',
  detail: 'wewewewew',
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
