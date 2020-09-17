import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageCropperDemoComponent } from './image-cropper-demo.component';

const routes: Routes = [{ path: '', component: ImageCropperDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageCropperDemoRoutingModule { }
