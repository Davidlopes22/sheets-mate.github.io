import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCodeGeneratedComponent } from './modal-code-generated.component';

describe('ModalCodeGeneratedComponent', () => {
  let component: ModalCodeGeneratedComponent;
  let fixture: ComponentFixture<ModalCodeGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCodeGeneratedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCodeGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
