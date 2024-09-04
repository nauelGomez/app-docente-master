import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalPonerNotaComponent } from './modal-poner-nota/modal-poner-nota.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-asignar-notas',
  templateUrl: './asignar-notas.component.html',
  styleUrls: ['./asignar-notas.component.css']
})
export class AsignarNotasComponent {
  mensaje="Calificaciones"
  constructor(private modal:NgbModal,
    private Route:Router
  ){}

  openModal(){
    const modal = this.modal.open(ModalPonerNotaComponent,{backdrop:'static', size:'xl'})
    modal.result.then(variable =>{
      this.mensaje = variable
    })
  }
}
