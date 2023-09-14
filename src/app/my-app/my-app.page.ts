import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-app',
  templateUrl: 'my-app.page.html',
  styleUrls: ['my-app.page.scss']
})
export class MyAppPage {
  alumnos = [
    { nombre: 'Alumno1', apellido: 'Apellido1', presente: false },
    { nombre: 'Alumno2', apellido: 'Apellido2', presente: false },
    // Agrega más alumnos aquí
  ];

  constructor(private menu: MenuController, private router: Router) {}

  openMenu() {
    this.menu.open();
  }

  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión, como eliminar tokens o datos de autenticación
    // Después redirige a la página de inicio de sesión
    // Ejemplo de lógica simulada para cerrar sesión:
    localStorage.removeItem('token'); // Elimina el token de autenticación almacenado
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }

  guardarAsistencia(alumno: { nombre: string, apellido: string, presente: boolean }) {
    if (alumno) {
      // Aquí puedes implementar la lógica para guardar la asistencia del alumno
      // Por ejemplo, puedes actualizar una propiedad "presente" en tu base de datos o servicio
      // También puedes mostrar un mensaje al usuario para confirmar que la asistencia se ha guardado correctamente
      console.log(`Asistencia de ${alumno.nombre} ${alumno.apellido} guardada como ${alumno.presente ? 'Presente' : 'Ausente'}`);
    }
  }
}

