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
  destinatariosSeleccionados: number[] = [];

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
  alumnosCursoSeleccionado: { id: number, nombre: string, cursoId: number }[] = [];
  constructor(private router: Router) { }

  onChangeSelection(event: any) {
    const selectedOptions = Array.from(event.target.selectedOptions); // Obtener todas las opciones seleccionadas
    this.destinatariosSeleccionados = []; // Resetear la lista de seleccionados

    selectedOptions.forEach((option: any) => {
      const selectedValue = option.value;
      const curso = this.cursos.find(curso => curso.nombre === option.label); // Revisar si es un curso

      if (curso) {
        // Si seleccionó un curso, agregar todos los alumnos del curso
        const alumnosDelCurso = this.alumnos[curso.id].map(alumno => alumno.id);
        this.destinatariosSeleccionados = this.destinatariosSeleccionados.concat(alumnosDelCurso);
      } else {
        // Si seleccionó un alumno, agregar solo ese alumno
        this.destinatariosSeleccionados.push(Number(selectedValue));
      }
    });
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
      console.log('Difusión enviada:', {
        titulo: this.titulo,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        contenido: this.contenido,
        archivos: this.archivos,
        destinatarios: this.destinatariosSeleccionados
      });
      // Implementar lógica para enviar la difusión
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
    this.alumnosCursoSeleccionado = [];

    this.cursos.forEach(curso => {
      // Primero agregamos el curso al array
      this.alumnosCursoSeleccionado.push({ id: curso.id, nombre: curso.nombre, cursoId: curso.id });

      // Luego agregamos los alumnos de ese curso, asegurándonos de incluir el cursoId
      const alumnosDelCurso = this.alumnos[curso.id].map(alumno => ({
        ...alumno,
        cursoId: curso.id // Añadimos cursoId a cada alumno
      }));

      // Concatenamos los alumnos con el array
      this.alumnosCursoSeleccionado = this.alumnosCursoSeleccionado.concat(alumnosDelCurso);
    });
  }
}

