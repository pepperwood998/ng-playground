import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDatatableComponent } from './base-datatable.component';

describe('BaseDatatableComponent', () => {
  let component: BaseDatatableComponent;
  let fixture: ComponentFixture<BaseDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
