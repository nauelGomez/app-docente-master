import { Component, HostListener, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DifusionService } from '../difusion.service';

interface DifusionPedagogica {
  fecha: Date;
  titulo: string;
  estado: string;
  vigenciaInicio: Date;
  vigenciaFin: Date;
}

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-lista-difusiones',
  templateUrl: './lista-difusiones.component.html',
  styleUrls: ['./lista-difusiones.component.css']
})
export class ListaDifusionesComponent {
  difusiones: any[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private difusionService: DifusionService) { }

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

  gOnInit(): void {
    // Suscribirse al observable para obtener las difusiones
    this.difusionService.difusiones$.subscribe(difusiones => {
      this.difusiones = difusiones;
    });
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this.isSmallScreen = width < 768;
  }

  verDetalle(difusion: DifusionPedagogica) {   
    this.router.navigate(['visualizar-difusion'], {
      relativeTo: this.route,
      queryParams: { titulo: difusion.titulo }
    });
  }

  nuevaDifusion() {
    
    this.router.navigate(['crear-difusion'], { relativeTo: this.route });
  }
}
