import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  showDialog(componentType: any) {
    const dialogComponent = this.dialog.openDialogs.map(
      (d) => d.componentInstance
    );
    console.log(dialogComponent);
    dialogComponent.forEach((dc) => {
      if (dc instanceof componentType) {
        dc.dialogRef.close();
      }
    });
    console.log('------------------');
    return this.dialog.open(componentType);
  }
}
