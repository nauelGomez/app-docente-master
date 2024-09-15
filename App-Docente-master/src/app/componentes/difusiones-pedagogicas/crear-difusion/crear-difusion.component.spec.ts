import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDifusionComponent } from './crear-difusion.component';

describe('CrearDifusionComponent', () => {
  let component: CrearDifusionComponent;
  let fixture: ComponentFixture<CrearDifusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDifusionComponent]
    });
    fixture = TestBed.createComponent(CrearDifusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
