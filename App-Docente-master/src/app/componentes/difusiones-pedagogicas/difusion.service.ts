import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DifusionService {
  private difusionesSubject = new BehaviorSubject<any[]>([]); // Almacena las difusiones
  difusiones$ = this.difusionesSubject.asObservable(); // Observable para compartir con otros componentes

  constructor() {}

  // Agregar una nueva difusión
  agregarDifusion(difusion: any) {
    const difusionesActuales = this.difusionesSubject.value;
    this.difusionesSubject.next([...difusionesActuales, difusion]);
  }
}
