import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Quill from 'quill';

@Component({
  selector: 'app-crear-difusion',
  templateUrl: './crear-difusion.component.html',
  styleUrls: ['./crear-difusion.component.css']
})
export class CrearDifusionComponent {
  titulo: string = '';
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  contenido: string = '';
  archivos: File[] = [];

  @ViewChild('editor', { static: false }) editorElement!: ElementRef;
  quillInstance!: Quill;

  cursos = [
    { id: 1, nombre: 'Curso 1' },
    { id: 2, nombre: 'Curso 2' }
    // Cargar dinámicamente los cursos correspondientes al profesor logueado
  ];

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image']
    ]
  };

  constructor(private router: Router) {}

  isFormValid(): boolean {
    return this.titulo?.trim().length > 0 &&
           this.fechaInicio !== null &&
           this.fechaFin !== null &&
           this.contenido?.trim().length > 0;
  }

  enviarDifusion() {
    if (this.isFormValid()) {
      console.log('Difusión enviada:', { titulo: this.titulo, fechaInicio: this.fechaInicio, fechaFin: this.fechaFin, contenido: this.contenido, archivos: this.archivos });
      //falta implementar
    }
  }

  cancelar() {
    this.router.navigate(['/lista-difusiones']);
  }

  
  onFileSelected(event: any) {
    this.archivos = event.target.files;
  }
  ngAfterViewInit() {
    this.quillInstance = new Quill(this.editorElement.nativeElement, {
      theme: 'snow',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['link', 'image']
        ]
      }
    });
  }
}

