import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDonorPage } from './profile-donor.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDonorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDonorPageRoutingModule {}
