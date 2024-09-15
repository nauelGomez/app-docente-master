import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DifusionesPedagogicasComponent } from './difusiones-pedagogicas.component';

describe('DifusionesPedagogicasComponent', () => {
  let component: DifusionesPedagogicasComponent;
  let fixture: ComponentFixture<DifusionesPedagogicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifusionesPedagogicasComponent]
    });
    fixture = TestBed.createComponent(DifusionesPedagogicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
