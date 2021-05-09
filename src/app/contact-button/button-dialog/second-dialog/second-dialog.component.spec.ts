import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDialogComponent } from './second-dialog.component';

describe('SecondDialogComponent', () => {
  let component: SecondDialogComponent;
  let fixture: ComponentFixture<SecondDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
