import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabBugComponent } from './mat-tab-bug.component';

describe('MatTabBugComponent', () => {
  let component: MatTabBugComponent;
  let fixture: ComponentFixture<MatTabBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTabBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTabBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
