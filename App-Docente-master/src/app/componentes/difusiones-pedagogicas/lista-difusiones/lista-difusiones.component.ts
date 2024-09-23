import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DifusionesService } from '../difusiones.service';

interface DifusionPedagogica {
  fecha: Date;
  titulo: string;
  estado: string;
  vigenciaInicio: Date;
  vigenciaFin: Date;
}


@Component({
  selector: 'app-lista-difusiones',
  templateUrl: './lista-difusiones.component.html',
  styleUrls: ['./lista-difusiones.component.css']
})
export class ListaDifusionesComponent {
  constructor(private router: Router, private route: ActivatedRoute, private difusionesService: DifusionesService) { }

  dataSource: DifusionPedagogica[] = [
    {
      fecha: new Date('2024-04-01'),
      titulo: 'Difusión sobre el uso de plataformas virtuales',
      estado: 'Publicada',
      vigenciaInicio: new Date('2024-04-01'),
      vigenciaFin: new Date('2024-04-30')
    },
    {
      fecha: new Date('2024-03-25'),
      titulo: 'Actualización de reglamentos internos',
      estado: 'Finalizada',
      vigenciaInicio: new Date('2024-03-25'),
      vigenciaFin: new Date('2024-04-10')
    },
  ];

  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
    this.difusionesService.difusiones$.subscribe(difusiones => {
      this.dataSource = [...this.dataSource, ...difusiones];
    });
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this.isSmallScreen = width < 768;
  }

  verDetalle(difusion: DifusionPedagogica) {
    console.log('Detalles de la difusión:', difusion);
    
    this.router.navigate(['visualizar-difusion'], {
      relativeTo: this.route,
      queryParams: { titulo: difusion.titulo }
    });
  }

  nuevaDifusion() {
    
    this.router.navigate(['crear-difusion'], { relativeTo: this.route });
  }
}
