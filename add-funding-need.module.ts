import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFundingNeedPageRoutingModule } from './add-funding-need-routing.module';

import { AddFundingNeedPage } from './add-funding-need.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    AddFundingNeedPageRoutingModule
  ],
  declarations: [AddFundingNeedPage]
})
export class AddFundingNeedPageModule {}
