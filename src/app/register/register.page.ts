import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  registerData = {
    username: '',
    password: '',
  };

  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) {}

  async register() {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.registerData.username,
        this.registerData.password
      );
      // Registro exitoso, redirige al usuario a la página principal
      this.navCtrl.navigateRoot('/home');
    } catch (error) {
      console.error('Error al registrar:', error);
      // Maneja errores de registro, como usuario ya existente
    }
  }
}

