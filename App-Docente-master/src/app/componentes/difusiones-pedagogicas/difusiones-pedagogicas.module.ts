import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from 'src/app/compartido/compartido.module';
import { DifusionesPedagogicasComponent } from './difusiones-pedagogicas.component';
import { DifusionesPedagogicasRoutingModule } from './difusiones-pedagogicas-routing';
import { VisualizarDifusionComponent } from './visualizar-difusion/visualizar-difusion.component';
import { CrearDifusionComponent } from './crear-difusion/crear-difusion.component';

@NgModule({
    declarations: [
       DifusionesPedagogicasComponent,
       VisualizarDifusionComponent,
       CrearDifusionComponent
      ],
      imports: [
        CommonModule,
        CompartidoModule,
        DifusionesPedagogicasRoutingModule,
        
    ]
  })
  export class DifusionesPedagogicasModule { }