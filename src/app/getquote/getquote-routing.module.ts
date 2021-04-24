import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetquotePage } from './getquote.page';

const routes: Routes = [
  {
    path: '',
    component: GetquotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetquotePageRoutingModule {}
