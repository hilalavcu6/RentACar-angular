import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrantEditComponent } from './brant-edit.component';

describe('BrantEditComponent', () => {
  let component: BrantEditComponent;
  let fixture: ComponentFixture<BrantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrantEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
