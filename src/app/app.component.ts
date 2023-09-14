import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private menu: MenuController, private router: Router) {}

  closeMenu() {
    this.menu.close();
  }

  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión, como eliminar tokens o datos de autenticación
    // Después redirige a la página de inicio de sesión
    // Ejemplo de lógica simulada para cerrar sesión:
    localStorage.removeItem(''); // Elimina el token de autenticación almacenado
    this.router.navigate(['/']); // Redirige al usuario a la página de inicio de sesión
  }
}
