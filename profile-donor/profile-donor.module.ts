import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDonorPageRoutingModule } from './profile-donor-routing.module';

import { ProfileDonorPage } from './profile-donor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDonorPageRoutingModule
  ],
  declarations: [ProfileDonorPage]
})
export class ProfileDonorPageModule {}
