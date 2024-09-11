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
  modalService: any;
  constructor(private modal:NgbModal,
    private Route:Router
  ){}

  openModal(){
    const modalRef = this.modalService.open(ModalPonerNotaComponent);
    modalRef.result.then((result: any) => {
      if (result) {
        console.log('Nota asignada:', result);     
      }
    }).catch((error: any) => {
      console.error('Modal cerrado sin guardar:', error);
    });
  }
}
