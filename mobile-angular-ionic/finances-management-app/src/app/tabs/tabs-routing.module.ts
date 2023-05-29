import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadChildren: () =>
          import('../pages/overview/overview.module').then(
            (m) => m.OverviewPageModule
          ),
      },
      {
        path: 'wallets',
        loadChildren: () =>
          import('../pages/wallets/wallets.module').then(
            (m) => m.WalletsPageModule
          ),
      },
      {
        path: 'analytics',
        loadChildren: () =>
          import('../pages/analytics/analytics.module').then(
            (m) => m.AnalyticsPageModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('../pages/transactions/transactions.module').then(
            (m) => m.TransactionsPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
