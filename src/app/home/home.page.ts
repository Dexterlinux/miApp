import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  alumnos = [
    { nombre: 'Alumno1', presente: false },
    { nombre: 'Alumno2', presente: false },
    { nombre: 'Alumno3', presente: false },
    // Agrega más alumnos aquí
  ];

  constructor(private menu: MenuController, private router: Router) {}

  openMenu() {
    this.menu.open();
  }

  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión
    // Por ejemplo, redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}


