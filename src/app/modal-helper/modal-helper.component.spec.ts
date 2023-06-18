import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHelperComponent } from './modal-helper.component';

describe('ModalHelperComponent', () => {
  let component: ModalHelperComponent;
  let fixture: ComponentFixture<ModalHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
