import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPonerNotaComponent } from './modal-poner-nota.component';

describe('ModalPonerNotaComponent', () => {
  let component: ModalPonerNotaComponent;
  let fixture: ComponentFixture<ModalPonerNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPonerNotaComponent]
    });
    fixture = TestBed.createComponent(ModalPonerNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
