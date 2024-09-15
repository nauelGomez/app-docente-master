import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDifusionComponent } from './visualizar-difusion.component';

describe('VisualizarDifusionComponent', () => {
  let component: VisualizarDifusionComponent;
  let fixture: ComponentFixture<VisualizarDifusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarDifusionComponent]
    });
    fixture = TestBed.createComponent(VisualizarDifusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
