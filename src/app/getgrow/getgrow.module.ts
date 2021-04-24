import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetgrowPageRoutingModule } from './getgrow-routing.module';

import { GetgrowPage } from './getgrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GetgrowPageRoutingModule
  ],
  declarations: [GetgrowPage]
})
export class GetgrowPageModule {}
