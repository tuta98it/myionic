import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerManagementPage } from './partner-management.page';


const routes: Routes = [
  {
    path: '',
    component: PartnerManagementPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'laboratory',
      },
      {
        path: 'partnership',
        loadChildren: () => import('./partner-tabs/partnership/partnership.module').then(m => m.PartnershipModule),
      },
      {
        path: 'laboratory',
        loadChildren: () => import('./partner-tabs/laboratory/laboratory.module').then(m => m.LaboratoryModule),
      },
      {
        path: 'services',
        loadChildren: () => import('./partner-tabs/services/services.module').then(m => m.ServicesModule),
      },
      {
        path: 'notifications',
        loadChildren: () => import('./partner-tabs/notifications/notifications.module').then(m => m.NotificationsModule),
      },
      {
        path: 'request',
        loadChildren: () => import('./partner-tabs/request/request.module').then(m => m.RequestModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerManagementPageRoutingModule {}
