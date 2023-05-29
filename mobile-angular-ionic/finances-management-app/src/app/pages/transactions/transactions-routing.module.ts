import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsPage } from './transactions.page';
import { ModifyCategoriesComponent } from './modify-categories/modify-categories.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPage,
  },
  {
    path: 'category',
    component: ModifyCategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsPageRoutingModule {}
