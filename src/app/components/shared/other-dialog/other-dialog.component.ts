import { Component, OnInit } from '@angular/core';
import { DialogService } from '#shared/services/dialog.service';
import { SomeDialogComponent } from '../some-dialog/some-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-other-dialog',
  templateUrl: './other-dialog.component.html',
  styleUrls: ['./other-dialog.component.scss']
})
export class OtherDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OtherDialogComponent>,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  openSomeDialog(): void {
    this.dialogService
      .showDialog(SomeDialogComponent)
      .afterOpened()
      .subscribe((a) => console.log(a));
  }
}
