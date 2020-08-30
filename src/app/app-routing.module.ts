import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '#components/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'form-handling',
        redirectTo: 'form-handling/',
        pathMatch: 'full'
      },
      {
        path: 'form-handling/:id',
        loadChildren: () =>
          import('./pages/form-handling/form-handling.module').then(
            (m) => m.FormHandlingModule
          )
      },
      {
        path: 'datatable',
        loadChildren: () =>
          import('./pages/datatable/datatable.module').then(
            (m) => m.DatatableModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
