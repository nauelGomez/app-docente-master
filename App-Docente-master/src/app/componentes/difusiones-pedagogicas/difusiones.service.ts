import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DifusionesService {
  private difusionesSource = new BehaviorSubject<any[]>([]);
  difusiones$ = this.difusionesSource.asObservable();

  agregarDifusion(difusion: any) {
    const difusionesActuales = this.difusionesSource.getValue();
    this.difusionesSource.next([...difusionesActuales, difusion]);
  }
}
