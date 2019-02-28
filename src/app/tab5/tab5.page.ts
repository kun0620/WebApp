import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})



export class Tab5Page implements OnInit {
  public htmlpage = [
  {
  title: 'HTML Basic',
  detail: '',
  url:'/phpdat'
  },
  {
  title: 'HTML Links',
  detail: 'wewewewew',
  url:'/htmllink'
  }
  ,
  {
  title: 'HTML Headings',
  detail: 'wewewewew',
  url:'/htmlhead'
  }
  ,
  {
  title: 'HTML Images',
  detail: 'wewewewew',
  url:'/htmlimg'
  },
  {
  title: 'HTML Tables',
  detail: 'wewewewew',
  url:'/htmltable'
  },
  {
  title: 'HTML List',
  detail: 'wewewewew',
  url:'/htmllist'
  },
  {
  title: 'HTML Formatting',
  detail: 'wewewewew',
  url:'/htmlfor'
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
