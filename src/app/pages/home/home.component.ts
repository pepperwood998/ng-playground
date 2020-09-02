import { Component, OnInit } from '@angular/core';
import { DialogService } from '#shared/services/dialog.service';
import { SomeDialogComponent } from '#components/shared/some-dialog/some-dialog.component';
import { OtherDialogComponent } from '#components/shared/other-dialog/other-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialogService.showDialog(OtherDialogComponent);
    this.dialogService.showDialog(SomeDialogComponent);
    this.dialogService.showDialog(SomeDialogComponent);
    this.dialogService.showDialog(SomeDialogComponent);
  }
}
