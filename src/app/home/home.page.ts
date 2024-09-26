import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  correo: string = '';  
  clave: string = '';   

  private readonly CORRECTO_CORREO: string = 'Usuario1';
  private readonly CORRECTO_CLAVE: string = 'MiClav3';

  constructor(private router: Router) {}

  menu() {
    if (this.correo.trim() !== '' && this.clave.trim() !== '') {
      if (this.correo === this.CORRECTO_CORREO && this.clave === this.CORRECTO_CLAVE) {
        this.router.navigate(['/menu']);
      } else {
        alert('Correo o clave incorrectos');
      }
    } else {
      alert('Por favor, ingresa un correo y una clave');
    }
  }

  recuperarClave() {
    alert('Funcionalidad para recuperar la clave no implementada.');
  }

  // Método para manejar el cierre de sesión
    // Aquí puedes implementar la lógica de cierre de sesión si es necesario
    // Por ejemplo, limpiar los datos de autenticación en el localStorage
    // localStorage.removeItem('usuario');
    
    // Redirige a la página de inicio de sesión
  }

