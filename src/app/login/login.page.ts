import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  loginData = {
    username: '',
    password: '',
  };
  usuario = 'alumno'; // Cambia esto a 'profesor' para el usuario profesor

  constructor(private navCtrl: NavController) {}

  login() {
    // Aquí puedes implementar la lógica de inicio de sesión
    // Por ejemplo, verifica las credenciales y redirige al usuario a la página correspondiente
    if (this.loginData.username === 'usuario' && this.loginData.password === 'contraseña') {
      // Usuario y contraseña válidos
      const destino = this.usuario === 'alumno' ? '/my-app' : '/home';
      this.navCtrl.navigateRoot(destino);
    } else {
      // Credenciales incorrectas, muestra un mensaje de error
      console.error('Credenciales incorrectas');
    }
  }
}

