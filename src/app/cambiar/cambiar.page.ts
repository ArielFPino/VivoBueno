import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.page.html',
  styleUrls: ['./cambiar.page.scss'],
})
export class CambiarPage {
  usuario: string = '';      
  nuevaClave: string = '';   
  verificarClave: string = ''; 

  constructor(private router: Router, private alertController: AlertController) {}


  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


  cambiar() {
  
    if (!this.usuario.trim()) {
      this.mostrarAlerta('Por favor, ingresa un correo o usuario');
      return;
    }

 
    if (!this.nuevaClave.trim()) {
      this.mostrarAlerta('Por favor, ingresa una nueva clave');
      return;
    }

    if (!this.verificarClave.trim()) {
      this.mostrarAlerta('Por favor, verifica la nueva clave');
      return;
    }

 
    if (this.nuevaClave !== this.verificarClave) {
      this.mostrarAlerta('Las contraseñas no coinciden');
      return;
    }

    
    this.mostrarAlerta('¡Clave cambiada exitosamente!');
    this.router.navigate(['/menu']); 
  }
}
