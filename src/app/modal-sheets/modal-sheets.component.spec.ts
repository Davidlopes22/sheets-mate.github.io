import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSheetsComponent } from './modal-sheets.component';

describe('ModalSheetsComponent', () => {
  let component: ModalSheetsComponent;
  let fixture: ComponentFixture<ModalSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSheetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
