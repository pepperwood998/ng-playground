import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialog } from '@angular/material/dialog';
import { ImageCropperDialogComponent } from './image-cropper-dialog/image-cropper-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-cropper-demo',
  templateUrl: './image-cropper-demo.component.html',
  styleUrls: ['./image-cropper-demo.component.scss']
})
export class ImageCropperDemoComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {}

  onImageChange(event: ImageCroppedEvent): void {
    this.dialog
      .open(ImageCropperDialogComponent, {
        data: { event },
        minWidth: '50%'
      })
      .afterClosed()
      .subscribe((value) => {
        const file = value.data;
        const form = new FormData();
        form.append('image', new File([file], 'name'));
        this.http.post('/hello', form).subscribe(() => {
          console.log('sdfsdf');
        });
      });
  }
}
