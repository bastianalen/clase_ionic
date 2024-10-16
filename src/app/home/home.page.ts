import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreEstudiante: string | undefined;
  asistencia: boolean | undefined;
  registrosAsistencias: any[] = [];


  registrarAsistencia() {
    const registro = {
      nombreEstudiante: this.nombreEstudiante,
      asistencia: this.asistencia,
    };


    this.registrosAsistencias.push(registro);


    // Limpiar los campos después de registrar la asistencia
    this.nombreEstudiante = '';
    this.asistencia = false;
  }
}
