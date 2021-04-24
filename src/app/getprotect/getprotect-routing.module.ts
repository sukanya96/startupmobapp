import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetprotectPage } from './getprotect.page';

const routes: Routes = [
  {
    path: '',
    component: GetprotectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetprotectPageRoutingModule {}
