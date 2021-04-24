import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetprotectPageRoutingModule } from './getprotect-routing.module';

import { GetprotectPage } from './getprotect.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    GetprotectPageRoutingModule
  ],
  declarations: [GetprotectPage]
})
export class GetprotectPageModule {}
