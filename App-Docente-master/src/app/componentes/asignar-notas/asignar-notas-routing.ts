import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarNotasComponent } from './asignar-notas.component';
import { ModalPonerNotaComponent } from './modal-poner-nota/modal-poner-nota.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ListadoRitesComponent } from './listado-rites/listado-rites.component';

const routes: Routes = [
  {
    path: '',
    component: AsignarNotasComponent,
    children: [
      {
        path: '',
        component: ListadoRitesComponent
      },
      {
        path: 'listado-alumnos',
        component: ListadoAlumnosComponent
      },
      {
        path: 'modal',
        component: ModalPonerNotaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignarNotasRoutingModule { }