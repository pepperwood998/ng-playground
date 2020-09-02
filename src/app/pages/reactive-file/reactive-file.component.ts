import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonService } from '#shared/services/common.service';

@Component({
  selector: 'app-reactive-file',
  templateUrl: './reactive-file.component.html',
  styleUrls: ['./reactive-file.component.scss']
})
export class ReactiveFileComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      image: [null],
      title: ['']
    });
  }

  onSubmit(): void {
    this.commonService
      .upload(this.myForm.value)
      .subscribe((data) => console.log(data));
  }

  onImageChanged(event): void {
    const file = event.target.files[0];
    this.imageControl.setValue(file);
  }

  get imageControl(): FormControl {
    return this.myForm.get('image') as FormControl;
  }
}
