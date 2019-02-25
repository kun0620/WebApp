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
  { path: 'sqlin', loadChildren: './tab4/sqlin/sqlin.module#SqlinPageModule' },
  { path: 'sqlcr', loadChildren: './tab4/sqlcr/sqlcr.module#SqlcrPageModule' },
  { path: 'sqldr', loadChildren: './tab4/sqldr/sqldr.module#SqldrPageModule' },
  { path: 'sqlba', loadChildren: './tab4/sqlba/sqlba.module#SqlbaPageModule' },
  { path: 'sqlse', loadChildren: './tab4/sqlse/sqlse.module#SqlsePageModule' },
  { path: 'sqlwh', loadChildren: './tab4/sqlwh/sqlwh.module#SqlwhPageModule' },
  { path: 'sqlwan', loadChildren: './tab4/sqlwan/sqlwan.module#SqlwanPageModule' },
  { path: 'sqlob', loadChildren: './tab4/sqlob/sqlob.module#SqlobPageModule' },
  { path: 'sqlins', loadChildren: './tab4/sqlins/sqlins.module#SqlinsPageModule' },
  { path: 'sqlup', loadChildren: './tab4/sqlup/sqlup.module#SqlupPageModule' },
  { path: 'sqldel', loadChildren: './tab4/sqldel/sqldel.module#SqldelPageModule' },
  { path: 'sqllike', loadChildren: './tab4/sqllike/sqllike.module#SqllikePageModule' },
  { path: 'phphome', loadChildren: './tab5/phphome/phphome.module#PhphomePageModule' },
  { path: 'phpecho', loadChildren: './tab5/phpecho/phpecho.module#PhpechoPageModule' },
  { path: 'phpdt', loadChildren: './tab5/phpdt/phpdt.module#PhpdtPageModule' },
  { path: 'phpif', loadChildren: './tab5/phpif/phpif.module#PhpifPageModule' },
  { path: 'phpsw', loadChildren: './tab5/phpsw/phpsw.module#PhpswPageModule' },
  { path: 'phpwl', loadChildren: './tab5/phpwl/phpwl.module#PhpwlPageModule' },
  { path: 'phpfl', loadChildren: './tab5/phpfl/phpfl.module#PhpflPageModule' },
  { path: 'phphd', loadChildren: './tab5/phphd/phphd.module#PhphdPageModule' },
  { path: 'phpdat', loadChildren: './tab5/phpdat/phpdat.module#PhpdatPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
