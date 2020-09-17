import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCropperDemoRoutingModule } from './image-cropper-demo-routing.module';
import { ImageCropperDemoComponent } from './image-cropper-demo.component';
import { ImageCropperDialogComponent } from './image-cropper-dialog/image-cropper-dialog.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [ImageCropperDemoComponent, ImageCropperDialogComponent],
  imports: [CommonModule, ImageCropperDemoRoutingModule, ShareModule]
})
export class ImageCropperDemoModule {}
