import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonatePrivatePageRoutingModule } from './donate-private-routing.module';

import { DonatePrivatePage } from './donate-private.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonatePrivatePageRoutingModule
  ],
  declarations: [DonatePrivatePage]
})
export class DonatePrivatePageModule {}
