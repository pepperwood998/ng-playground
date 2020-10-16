import { Component, OnInit } from '@angular/core';
import { PrinterService } from '#services/printer.service';

@Component({
  selector: 'app-check-number',
  templateUrl: './check-number.component.html',
  styleUrls: ['./check-number.component.scss']
})
export class CheckNumberComponent implements OnInit {
  constructor(private printerService: PrinterService) {}

  ngOnInit(): void {}

  onConnect(): void {
    this.printerService.connect();
  }

  onPrint(): void {
    this.printerService.printReceipt([
      {
        type: 'text',
        value: 'Print This!'
      }
    ]);
  }
}
