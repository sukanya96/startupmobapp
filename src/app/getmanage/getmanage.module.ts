import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetmanagePageRoutingModule } from './getmanage-routing.module';

import { GetmanagePage } from './getmanage.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    GetmanagePageRoutingModule
  ],
  declarations: [GetmanagePage]
})
export class GetmanagePageModule {}
