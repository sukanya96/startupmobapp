import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetquotePageRoutingModule } from './getquote-routing.module';

import { GetquotePage } from './getquote.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    GetquotePageRoutingModule
  ],
  declarations: [GetquotePage]
})
export class GetquotePageModule {}
