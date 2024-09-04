import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPonerNotaComponent } from '../modal-poner-nota/modal-poner-nota.component';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent {
  displayedColumns: string[] = ['alumno', 'calFinal', 'primerCuatrimestre', 'segundoCuatrimestre', 'ver'];
  dataSource = ALUMNOS_DATA;

  constructor(private modalService: NgbModal) {}

  openModal(alumno: string) {
    const modalRef = this.modalService.open(ModalPonerNotaComponent, {backdrop: 'static', size: 'xl'});
    modalRef.componentInstance.alumno = alumno;
    modalRef.componentInstance.primerCuatrimestreAsignado = this.isPrimerCuatrimestreAsignado(alumno);

    modalRef.result.then((result: { tipo: string; cuatrimestre: 'primerCuatrimestre' | 'segundoCuatrimestre'; observacion: string }) => {
      const index = this.dataSource.findIndex(a => a.alumno === alumno);
      if (index !== -1) {
        this.dataSource[index][result.cuatrimestre] = result.tipo;
      }
    }, reason => {
      console.log('Modal dismissed:', reason);
    });
  }

  isPrimerCuatrimestreAsignado(alumno: string): boolean {
    const index = this.dataSource.findIndex(a => a.alumno === alumno);
    return index !== -1 && this.dataSource[index].primerCuatrimestre !== '';
  }
}

export interface Alumno {
  alumno: string;
  calFinal: string;
  primerCuatrimestre: string;
  segundoCuatrimestre: string;
}

const ALUMNOS_DATA: Alumno[] = [
  { alumno: 'Santiago, Martinez', calFinal: '', primerCuatrimestre: 'TEP', segundoCuatrimestre: 'TEA' },
  { alumno: 'Balasto, Pedro', calFinal: '', primerCuatrimestre: 'TEA', segundoCuatrimestre: 'TEA' },
  { alumno: 'Calamaschi, Ariel', calFinal: '', primerCuatrimestre: 'TEA', segundoCuatrimestre: 'TEP' },
  { alumno: 'Dagostino, Armando', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Esquivel, Mariano', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Fernandez, Fabian', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Ciriano, Mariela', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Aiello, Gisela', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Guevara, Maria', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Aereos, Juan Martin', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Bertolo, Ariel', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Pradas, Pablo', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Lopez Diaz, Juan Armando', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Gonzalez Olivero, Ezequiel', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Mendoza, Lola', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
  { alumno: 'Pontirolli, Alejandro', calFinal: '', primerCuatrimestre: '', segundoCuatrimestre: '' },
];
