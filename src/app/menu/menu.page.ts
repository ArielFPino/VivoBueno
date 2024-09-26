import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private navController: NavController) {}

  Asignaturas() {
    this.navController.navigateForward('/asignaturas');  // Navega a la página de asignaturas
  }

  asistencia() {
    this.navController.navigateForward('/asistencias'); 
  }

  registro() {
    this.navController.navigateForward('/registro');  
  }

  cambiar() {
    this.navController.navigateForward('/cambiar');  
  }

  // Método para manejar el cierre de sesión
  logout() {
    // Aquí puedes implementar la lógica de cierre de sesión si es necesario
    // Por ejemplo, limpiar los datos de autenticación en el localStorage
    // localStorage.removeItem('usuario');

    // Redirige a la página de inicio
    this.navController.navigateRoot('/home'); // Cambia '/login' a '/home'
  }
}
