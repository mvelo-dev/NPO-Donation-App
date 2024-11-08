import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseAdminPageRoutingModule } from './choose-admin-routing.module';

import { ChooseAdminPage } from './choose-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseAdminPageRoutingModule
  ],
  declarations: [ChooseAdminPage]
})
export class ChooseAdminPageModule {}
