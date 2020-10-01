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
      },
      {
        path: 'mat-tab-bug',
        loadChildren: () =>
          import('./pages/mat-tab-bug/mat-tab-bug.module').then(
            (m) => m.MatTabBugModule
          )
      },
      {
        path: 'image-cropper-demo',
        loadChildren: () =>
          import('./pages/image-cropper-demo/image-cropper-demo.module').then(
            (m) => m.ImageCropperDemoModule
          )
      }
    ]
  },
  {
    path: 'mat-tree-category',
    loadChildren: () =>
      import('./pages/mat-tree-category/mat-tree-category.module').then(
        (m) => m.MatTreeCategoryModule
      )
  },
  {
    path: 'check-number',
    loadChildren: () =>
      import('./pages/check-number/check-number.module').then(
        (m) => m.CheckNumberModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
