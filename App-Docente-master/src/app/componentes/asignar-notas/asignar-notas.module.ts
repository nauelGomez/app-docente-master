import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from 'src/app/compartido/compartido.module';
import { AsignarNotasRoutingModule } from './asignar-notas-routing';
import { AsignarNotasComponent } from './asignar-notas.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ModalPonerNotaComponent } from './modal-poner-nota/modal-poner-nota.component'; 
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCard, MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { ListadoRitesComponent } from './listado-rites/listado-rites.component'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AsignarNotasComponent,
    ListadoAlumnosComponent,
    ModalPonerNotaComponent,
    ListadoRitesComponent,
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    AsignarNotasRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatExpansionModule,
    MatProgressBarModule
  
  ]
})
export class AsignarNotasModule { }

