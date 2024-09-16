import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDifusionesComponent } from './lista-difusiones.component';

describe('ListaDifusionesComponent', () => {
  let component: ListaDifusionesComponent;
  let fixture: ComponentFixture<ListaDifusionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDifusionesComponent]
    });
    fixture = TestBed.createComponent(ListaDifusionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
