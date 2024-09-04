import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarNotasComponent } from './asignar-notas.component';

describe('AsignarNotasComponent', () => {
  let component: AsignarNotasComponent;
  let fixture: ComponentFixture<AsignarNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarNotasComponent]
    });
    fixture = TestBed.createComponent(AsignarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
