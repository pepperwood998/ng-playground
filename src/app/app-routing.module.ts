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
      },
      {
        path: 'reactive-file',
        loadChildren: () =>
          import('./pages/reactive-file/reactive-file.module').then(
            (m) => m.ReactiveFileModule
          )
      },
      {
        path: 'expansion-panel',
        loadChildren: () =>
          import('./pages/expansion-panel/expansion-panel.module').then(
            (m) => m.ExpansionPanelModule
          )
      },
      {
        path: 'form-array',
        loadChildren: () =>
          import('./pages/form-array/form-array.module').then(
            (m) => m.FormArrayModule
          )
      },
      {
        path: 'quill-editor',
        loadChildren: () =>
          import('./pages/quill-editor/quill-editor.module').then(
            (m) => m.QuillEditorModule
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
