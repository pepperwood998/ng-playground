import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFileComponent } from './reactive-file.component';

describe('ReactiveFileComponent', () => {
  let component: ReactiveFileComponent;
  let fixture: ComponentFixture<ReactiveFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
