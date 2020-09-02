import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-some-dialog',
  templateUrl: './some-dialog.component.html',
  styleUrls: ['./some-dialog.component.scss']
})
export class SomeDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SomeDialogComponent>) {}

  ngOnInit(): void {}
}
