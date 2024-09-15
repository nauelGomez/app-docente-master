import { Component, HostListener } from '@angular/core';

interface DifusionPedagogica {
  fecha: Date;
  titulo: string;
  estado: string;
  vigenciaInicio: Date;
  vigenciaFin: Date;
}

@Component({
  selector: 'app-difusiones-pedagogicas',
  templateUrl: './difusiones-pedagogicas.component.html',
  styleUrls: ['./difusiones-pedagogicas.component.css']
})
export class DifusionesPedagogicasComponent {

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
    // Otros elementos de la dataSource...
  ];

  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.checkScreenSize();
}

ngOnInit() {
  this.checkScreenSize(); // Verificar el tamaño de la pantalla cuando el componente se inicializa
}

checkScreenSize() {
  const width = window.innerWidth;
  
  // Considerar pantallas móviles si el ancho es menor de 768px, un valor más típico para móviles
  this.isSmallScreen = width < 768; 
}

  verDetalle(difusion: DifusionPedagogica) {
    console.log('Detalles de la difusión:', difusion);
  }
}
