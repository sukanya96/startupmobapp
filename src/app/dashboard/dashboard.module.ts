import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
//import { MbscModule } from '@mobiscroll/angular';
import { DashboardPage } from './dashboard.page';
import { SearchPageModule } from '../search/search.module';


@NgModule({
  imports: [
    NgCircleProgressModule,
    CommonModule,
    FormsModule,
   // SearchPageModule,
  
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
