import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakePaymentPageRoutingModule } from './make-payment-routing.module';

import { MakePaymentPage } from './make-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    MakePaymentPageRoutingModule
  ],
  declarations: [MakePaymentPage]
})
export class MakePaymentPageModule {}
