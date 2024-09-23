import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Quill from 'quill';
import Swal from 'sweetalert2';
import { DifusionService } from '../difusion.service';

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

  alumnosSeleccionados: number[] = []; // Almacenar alumnos seleccionados
  destinatariosSeleccionados: number[] = []; // Almacenar destinatarios

  @ViewChild('editor', { static: false }) editorElement!: ElementRef;
  quillInstance!: Quill;

  cursos = [
    { id: 1, nombre: 'Curso 1' },
    { id: 2, nombre: 'Curso 2' }
  ];

  alumnos: { [key: number]: { id: number, nombre: string }[] } = {
    1: [
      { id: 1, nombre: 'Alumno 1' },
      { id: 2, nombre: 'Alumno 2' }
    ],
    2: [
      { id: 3, nombre: 'Alumno 3' },
      { id: 4, nombre: 'Alumno 4' }
    ]
  };

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image']
    ]
  };

  constructor(private router: Router, private difusionService: DifusionService) { }

  // Alternar la selección de un alumno
  toggleAlumnoSeleccionado(alumnoId: number) {
    const index = this.alumnosSeleccionados.indexOf(alumnoId);
    if (index === -1) {
      this.alumnosSeleccionados.push(alumnoId); // Selecciona si no está
    } else {
      this.alumnosSeleccionados.splice(index, 1); // Deselecciona si ya está
    }
  }

  // Función para manejar la selección
  onChangeSelection(event: any) {
    const selectedOptions = Array.from(event.target.selectedOptions);
    this.destinatariosSeleccionados = []; // Resetear la lista de seleccionados

    selectedOptions.forEach((option: any) => {
      const selectedValue = option.value;
      const curso = this.cursos.find(curso => curso.nombre === option.label);

      if (curso) {
        // Si selecciona un curso, selecciona todos los alumnos de ese curso
        const alumnosDelCurso = this.alumnos[curso.id].map(alumno => alumno.id);
        this.destinatariosSeleccionados = this.destinatariosSeleccionados.concat(alumnosDelCurso);
      } else {
        // Si selecciona un alumno, lo añade
        this.destinatariosSeleccionados.push(Number(selectedValue));
      }
    });
    // Remover duplicados
    this.destinatariosSeleccionados = [...new Set(this.destinatariosSeleccionados)];
  }

  isFormValid(): boolean {
    return this.titulo?.trim().length > 0 &&
      this.fechaInicio !== null &&
      this.fechaFin !== null &&
      this.contenido?.trim().length > 0;
  }

  enviarDifusion() {
    if (this.isFormValid()) {
      const nuevaDifusion = {
        titulo: this.titulo,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        contenido: this.contenido,
        archivos: this.archivos,
        destinatarios: this.destinatariosSeleccionados
      };

      console.log('Difusión enviada:', nuevaDifusion);


      this.difusionService.agregarDifusion(nuevaDifusion);


      Swal.fire({
        icon: 'success',
        title: '¡Difusión enviada!',
        text: 'Tu difusión ha sido enviada correctamente.'
      });
    }
  }
  cancelar() {
    this.router.navigate(['/']);
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

  mostrarAlumnos() {
    this.alumnosSeleccionados = [];
    this.cursos.forEach(curso => {
      // Añadir el curso (no seleccionable, pero no hace falta concatenarlo)
      const alumnosDelCurso = this.alumnos[curso.id].map(alumno => alumno.id); // Solo extraemos los IDs

      // Concatenar los IDs de los alumnos (números, no objetos)
      this.alumnosSeleccionados = this.alumnosSeleccionados.concat(alumnosDelCurso);
    });
  }
}
