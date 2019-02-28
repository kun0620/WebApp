import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public sqlpage = [
  {
  title: 'AngularJS HOME',
  detail: '',url:'/sqlba'
  },
  {
  title: 'AngularJS Controllers',
  detail: 'wewewewew',url:'/sqlcr'
  },
  {
  title: 'AngularJS Modules',
  detail: 'wewewewew',url:'/sqldr'
  },
  {
  title: 'AngularJS Directives',
  detail: 'wewewewew',url:'/sqlin'
  },
  {
  title: 'AngularJS Data Binding',
  detail: 'wewewewew',url:'/sqllike'
  }

  // ,
  // {
  // title: 'SQL And, Or, Not',
  // detail: 'wewewewew',url:'/sql'
  // },
  // {
  // title: 'SQL Order By',
  // detail: 'wewewewew',url:'/csspd'
  // },
  // {
  // title: 'SQL Insert Into',
  // detail: 'wewewewew',url:'/csspd'
  // },
  // {
  // title: 'SQL Update',
  // detail: 'wewewewew',url:'/csspd'
  // },
  // {
  // title: 'SQL Delete',
  // detail: 'wewewewew',url:'/csspd'
  // },
  // {
  // title: 'SQL Like',
  // detail: 'wewewewew',url:'/csspd'
  // }
  ];
  constructor() { }

  ngOnInit() {
  }

}
