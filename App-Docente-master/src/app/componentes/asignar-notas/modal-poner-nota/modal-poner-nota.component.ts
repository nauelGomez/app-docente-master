import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-poner-nota',
  templateUrl: './modal-poner-nota.component.html',
  styleUrls: ['./modal-poner-nota.component.css']
})
export class ModalPonerNotaComponent {
[x: string]: any;

  @Input() alumno: string = '';  
  @Input() primerCuatrimestreAsignado: boolean = false;  

  formulario!: FormGroup;
  cuatrimestre: 'primerCuatrimestre' | 'segundoCuatrimestre' = 'primerCuatrimestre';  
  tipoNota: string = 'TEA';  

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      observacion: '',
    });
  }

  seleccionarCuatrimestre(cuatrimestre: 'primerCuatrimestre' | 'segundoCuatrimestre') {
    this.cuatrimestre = cuatrimestre;
    if (this.cuatrimestre === 'segundoCuatrimestre' && !this.primerCuatrimestreAsignado) {
      this.formulario.controls['observacion'].setValidators([Validators.required]);
    } else {
      this.formulario.controls['observacion'].clearValidators();
    }
    this.formulario.controls['observacion'].updateValueAndValidity();
  }

  seleccionarTipo(tipo: string) {
    this.tipoNota = tipo;
  }

  guardarNota() {
    if (this.formulario.valid) {
      const resultado = {
        cuatrimestre: this.cuatrimestre,
        tipo: this.tipoNota,
        observacion: this.formulario.value.observacion
      };
      this.activeModal.close(resultado);  
    }
  }

  cerrarModal() {
    this.activeModal.dismiss();
  }
  formControls(nombre: string): FormControl {
    return this.formulario.get(nombre) as FormControl;
  }
}
