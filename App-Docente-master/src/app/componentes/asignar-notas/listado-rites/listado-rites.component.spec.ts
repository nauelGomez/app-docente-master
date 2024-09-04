import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { ListadoRitesComponent } from './listado-rites.component';

describe('ListadoRitesComponent', () => {
  let component: ListadoRitesComponent;
  let fixture: ComponentFixture<ListadoRitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoRitesComponent]
    });
    fixture = TestBed.createComponent(ListadoRitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
