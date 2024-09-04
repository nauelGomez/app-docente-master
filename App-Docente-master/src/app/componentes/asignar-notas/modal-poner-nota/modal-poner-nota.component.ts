import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './modal-poner-nota.component.html',
  styleUrls: ['./modal-poner-nota.component.css']
})
export class ModalPonerNotaComponent {
  @Input() alumno: string= "";
  tipo: string = '';
  cuatrimestre: string = 'primerCuatrimestre';
  observacion: string = '';
  primerCuatrimestreAsignado: boolean = false;

  constructor(private activeModal: NgbActiveModal) {}

  guardar() {
    if (!this.tipo) {
      alert('El tipo es obligatorio.');
      return;
    }

    if (this.cuatrimestre === 'segundoCuatrimestre' && !this.primerCuatrimestreAsignado) {
      alert('No se puede asignar el segundo cuatrimestre sin antes asignar el primero.');
      return;
    }

    this.activeModal.close({ tipo: this.tipo, cuatrimestre: this.cuatrimestre, observacion: this.observacion });
  }

  cerrarModal() {
    this.activeModal.dismiss();
  }

  onObservacionChange(event: Event) {
    this.observacion = (event.target as HTMLTextAreaElement).value;
  }
}