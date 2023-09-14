import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';
  profile: string = 'https://i.pinimg.com/originals/e3/a5/4c/e3a54cbd8b22e09a498dee9376403d51.jpg'; // Ruta a la imagen por defecto

  constructor(private router: Router) {}
  

  login() {
    // Aquí puedes implementar la lógica de autenticación
    // Por ejemplo, verificar el nombre de usuario y la contraseña
    if (this.username === 'manuel' && this.password === 'hidalgo') {
      // Usuario 1 autenticado
      this.router.navigate(['/my-app']);
    } else if (this.username === 'jean' && this.password === 'pontigo') {
      // Usuario 2 autenticado
      this.router.navigate(['/my-app']);
    } else {
      // Credenciales incorrectas
      console.log('Credenciales incorrectas');
    }
  }
}
   




