import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-rites',
  templateUrl: './listado-rites.component.html',
  styleUrls: ['./listado-rites.component.css']
})
export class ListadoRitesComponent {
  dataSource = RITES_DATA;

  constructor(private router: Router, private route: ActivatedRoute) {}

  verAlumnos() {
    this.router.navigate(['./listado-alumnos'], { relativeTo: this.route });
  }
  getBarWidth(progreso: string): string {
    return progreso.replace('%', '') + '%';
  }
}

export interface Rite {
  fecha: string;
  denominacion: string;
  curso: string;
  materia: string;
  estado: string;
  progreso: string;
}

const RITES_DATA: Rite[] = [
  { fecha: '2024-07-25', denominacion: 'Rite 1', curso: 'Curso 1', materia: 'Materia 1', estado: 'En Progreso', progreso: '50%' },
  { fecha: '2024-07-26', denominacion: 'Rite 2', curso: 'Curso 2', materia: 'Materia 2', estado: 'Completado', progreso: '100%' }
];
