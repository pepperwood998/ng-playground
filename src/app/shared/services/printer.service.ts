import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var epson: any;

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  private readonly ePosDevice = new epson.ePOSDevice();
  private ipAddress = '192.168.1.1';
  private port = '8000';
  private printer: any;
  private cbContinue = null;

  constructor() {}

  connect(): void {
    if (!this.ePosDevice?.isConnected()) {
      console.log('[Connect]', 'Connecting...');
      this.ePosDevice?.connect(this.ipAddress, this.port, this.cbConnect);
    }
  }

  printReceipt(data: any[]): void {
    if (!this.ePosDevice?.isConnected()) {
      this.cbContinue = () => {
        this.printReceipt(data);
      };
      this.connect();
      return;
    }

    this.printer?.reset();
    this.printer?.addLayout(this.printer?.LAYOUT_RECEIPT, 800, 0, 0, 0, 35, 0);
    this.setData(data)?.send();
  }

  setData(data: any[]): any {
    // set data to printer object manually
    return this.printer;
  }

  disconnect(): void {
    this.ePosDevice?.deleteDevice(this.printer, this.cbDeleteDevice);
  }

  private cbConnect(result: any): void {
    const deviceId = 'local_printer';
    const options = { crypto: false, buffer: false };

    if (result === 'OK' || result === 'SLL_CONNECT_OK') {
      this.ePosDevice.createDevice(
        deviceId,
        this.ePosDevice?.DEVICE_TYPE_PRINTER,
        options,
        this.cbCreateDevice
      );
    } else {
      // display errors
      console.log('[Connect]', 'Failed to connect');
    }
  }

  private cbCreateDevice(device: any, errorCode: any): void {
    if (!device) {
      // display errors
      console.log('[Create_Device]', 'Failed to create device');
      return;
    }

    this.printer = device;
    this.printer.onreceive = (response: any) => {
      if (response?.success) {
      } else {
        // display print failed errors
      }
    };
    if (this.cbContinue && this.cbContinue instanceof Function) {
      this.cbContinue();
      this.cbContinue = null;
    }
  }

  private cbDeleteDevice(errorCode: any): void {
    this.ePosDevice?.disconnect();
  }
}
