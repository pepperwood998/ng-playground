import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeCategoryComponent } from './mat-tree-category.component';

describe('MatTreeCategoryComponent', () => {
  let component: MatTreeCategoryComponent;
  let fixture: ComponentFixture<MatTreeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTreeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTreeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
