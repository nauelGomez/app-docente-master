import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifusionesPedagogicasComponent } from './difusiones-pedagogicas.component';
import { VisualizarDifusionComponent } from './visualizar-difusion/visualizar-difusion.component';
import { CrearDifusionComponent } from './crear-difusion/crear-difusion.component';
import { ListaDifusionesComponent } from './lista-difusiones/lista-difusiones.component';

const routes: Routes = [
  {
    path: '',
    component: DifusionesPedagogicasComponent,
    children: [
      {
        path: '',
        component: ListaDifusionesComponent
      },
      {
        path: 'visualizar-difusion',
        component: VisualizarDifusionComponent
      },
      {
        path: 'crear-difusion',
        component: CrearDifusionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifusionesPedagogicasRoutingModule { }
