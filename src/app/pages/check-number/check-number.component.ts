import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-number',
  templateUrl: './check-number.component.html',
  styleUrls: ['./check-number.component.scss']
})
export class CheckNumberComponent implements OnInit {
  someNumber = new FormControl(null, [
    Validators.required,
    Validators.pattern(/^(?!0{2,})\d{0,3}(\.\d{0,1})?$/)
  ]);

  constructor() {}

  ngOnInit(): void {}
}
