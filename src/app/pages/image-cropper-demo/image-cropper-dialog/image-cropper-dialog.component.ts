import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper-dialog',
  templateUrl: './image-cropper-dialog.component.html',
  styleUrls: ['./image-cropper-dialog.component.scss']
})
export class ImageCropperDialogComponent implements OnInit {
  imageChangedEvent: ImageCroppedEvent;
  croppedImage: Blob;

  constructor(
    public dialogRef: MatDialogRef<ImageCropperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.imageChangedEvent = this.data.event;
  }

  onImageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = base64ToFile(event?.base64);
  }

  onFinishCropImage(): void {
    this.dialogRef.close({ data: this.croppedImage });
  }
}
