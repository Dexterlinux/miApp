import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.loginData.username,
        this.loginData.password
      );
      // Inicio de sesión exitoso, redirige al usuario a la página principal
      this.navCtrl.navigateRoot('/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Maneja errores de inicio de sesión, como credenciales incorrectas
    }
  }
}

