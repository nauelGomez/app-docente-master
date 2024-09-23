import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DifusionesService } from '../difusiones.service';
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
    {
      nombre: 'Curso 1',
      seleccionado: false,
      mostrarAlumnos: false,
      alumnos: [
        { nombre: 'Alumno 1-1', seleccionado: false },
        { nombre: 'Alumno 1-2', seleccionado: false },
      ]
    },
    {
      nombre: 'Curso 2',
      seleccionado: false,
      mostrarAlumnos: false,
      alumnos: [
        { nombre: 'Alumno 2-1', seleccionado: false },
        { nombre: 'Alumno 2-2', seleccionado: false },
      ]
    }
  ];

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image']
    ]
  };

  constructor(private router: Router, private difusionesService: DifusionesService) {}
  isFormValid() {
    return this.titulo && this.fechaInicio && this.fechaFin && this.contenido;
  }
  toggleCurso(curso: any) {
    curso.mostrarAlumnos = !curso.mostrarAlumnos;
    curso.seleccionado = !curso.seleccionado;
  }

  toggleAlumno(alumno: any, curso: any) {
    alumno.seleccionado = !alumno.seleccionado;
    curso.seleccionado = false;
  }
  enviarDifusion() {
    if (this.isFormValid()) {
      const nuevaDifusion = {
        fecha: new Date(),
        titulo: this.titulo,
        estado: 'Publicada',
        vigenciaInicio: this.fechaInicio,
        vigenciaFin: this.fechaFin
      };

      this.difusionesService.agregarDifusion(nuevaDifusion);
      this.router.navigate(['/lista-difusiones']);
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

