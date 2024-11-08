import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonatePrivatePage } from './donate-private.page';

const routes: Routes = [
  {
    path: '',
    component: DonatePrivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonatePrivatePageRoutingModule {}
