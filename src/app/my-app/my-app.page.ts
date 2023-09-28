import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-my-app',
  templateUrl: 'my-app.page.html',
  styleUrls: ['my-app.page.scss']
})
export class MyAppPage {
  alumnos = [
    { nombre: 'Alumno1', presente: false },
    { nombre: 'Alumno2', presente: false },
    // Agrega más alumnos aquí
  ];

  constructor(private menu: MenuController) {}

  toggleMenu() {
    this.menu.toggle(); // Abre o cierra el menú lateral
  }

  cerrarSesion() {
    // Aquí puedes agregar la lógica para cerrar sesión
    // Por ejemplo, redirige al usuario a la página de inicio de sesión
  }

  marcarAsistencia(alumno) {
    alumno.presente = true; // Marcar al alumno como presente
  }

  marcarAusencia(alumno) {
    alumno.presente = false; // Marcar al alumno como ausente
  }
}
