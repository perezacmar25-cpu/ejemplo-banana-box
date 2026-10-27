import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  emailForm = ''
  nombreForm = ''
  apellidoForm = ''
  nifForm = ''
  telefonoForm = ''
  sexoForm = ''
  contraseniaForm = ''
  confirmarContraseniaForm = ''
  
  sendForm() {
    console.log('Email:', this.emailForm);
    console.log('Nombre:', this.nombreForm);
    console.log('Apellido:', this.apellidoForm);
    console.log('NIF:', this.nifForm);
    console.log('Teléfono:', this.telefonoForm);
    console.log('Sexo:', this.sexoForm);
    console.log('Contraseña:', this.contraseniaForm);
    console.log('Confirmar Contraseña:', this.confirmarContraseniaForm);
}
}
