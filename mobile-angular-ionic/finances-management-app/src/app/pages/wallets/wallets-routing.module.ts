import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletsPage } from './wallets.page';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  {
    path: '',
    component: WalletsPage,
  },
  {
    path: 'modify',
    component: ModifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletsPageRoutingModule {}
