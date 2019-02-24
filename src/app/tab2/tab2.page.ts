import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

public htmlpage = [
{
title: 'HTML Basic',
detail: '',
url:'/htmlbasic'
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


}
