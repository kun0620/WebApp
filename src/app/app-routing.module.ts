import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path: 'tab1', loadChildren: './tab1/tab1.module#Tab2PageModule' },
  {path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  {path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  {path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  {path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'htmlbasic', loadChildren: './tab2/htmlbasic/htmlbasic.module#HtmlbasicPageModule' },
  { path: 'htmllink', loadChildren: './tab2/htmllink/htmllink.module#HtmllinkPageModule' },
  { path: 'htmlhead', loadChildren: './tab2/htmlhead/htmlhead.module#HtmlheadPageModule' },
  { path: 'htmlimg', loadChildren: './tab2/htmlimg/htmlimg.module#HtmlimgPageModule' },
  { path: 'htmltable', loadChildren: './tab2/htmltable/htmltable.module#HtmltablePageModule' },
  { path: 'htmllist', loadChildren: './tab2/htmllist/htmllist.module#HtmllistPageModule' },
  { path: 'htmlfor', loadChildren: './tab2/htmlfor/htmlfor.module#HtmlforPageModule' },
  { path: 'cssht', loadChildren: './tab3/cssht/cssht.module#CsshtPageModule' },
  { path: 'csscol', loadChildren: './tab3/csscol/csscol.module#CsscolPageModule' },
  { path: 'cssbg', loadChildren: './tab3/cssbg/cssbg.module#CssbgPageModule' },
  { path: 'cssbd', loadChildren: './tab3/cssbd/cssbd.module#CssbdPageModule' },
  { path: 'csspd', loadChildren: './tab3/csspd/csspd.module#CsspdPageModule' },
  { path: 'csstext', loadChildren: './tab3/csstext/csstext.module#CsstextPageModule' },
  { path: 'cssfon', loadChildren: './tab3/cssfon/cssfon.module#CssfonPageModule' },
  { path: 'csslink', loadChildren: './tab3/csslink/csslink.module#CsslinkPageModule' },
  { path: 'csstable', loadChildren: './tab3/csstable/csstable.module#CsstablePageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
