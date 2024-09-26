import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage {
  // Definir el objeto con indexación flexible
  expandedMonths: { [key: string]: boolean } = {
    agosto: false,
    septiembre: false
  };

  // Asistencias del mes de agosto
  asistenciasAgosto = [
    { asignatura: 'Estadística Descriptiva', fecha: '2024-08-08', presente: true },
    { asignatura: 'Programación de Aplicación Móvil', fecha: '2024-08-12', presente: false },
    { asignatura: 'Arquitectura', fecha: '2024-08-14', presente: true },
    { asignatura: 'Calidad de Software', fecha: '2024-08-26', presente: false },
  ];

  // Asistencias del mes de septiembre
  asistenciasSeptiembre = [
    { asignatura: 'Estadística Descriptiva', fecha: '2024-09-12', presente: true },
    { asignatura: 'Programación de Aplicación Móvil', fecha: '2024-09-14', presente: false },
    { asignatura: 'Arquitectura', fecha: '2024-09-15', presente: true },
    { asignatura: 'Calidad de Software', fecha: '2024-09-24', presente: false },
  ];

  constructor() {}

  // Método para alternar la expansión de cada mes
  toggleMonth(month: string) {
    this.expandedMonths[month] = !this.expandedMonths[month];
  }
}
