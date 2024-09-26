import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController si lo necesitas para navegar

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {
  // Definir la lista de asignaturas
  asignaturas = [
    { nombre: 'Programacion de aplicacion movil', id: 1 },
    { nombre: 'Estadistica descriptiva', id: 2 },
    { nombre: 'Arquitectura', id: 3 },
    { nombre: 'Calidad de software', id: 4 }
  ];

  constructor(private navController: NavController) {}

  // Método para ver la asignatura (puedes agregar navegación si es necesario)
  viewSubject(asignatura: any) {
    console.log('Ingresando a la asignatura:', asignatura.nombre);
    // Si necesitas navegar a otra página, puedes usar NavController:
    // this.navController.navigateForward(`/asignatura/${asignatura.id}`);
  }
}
