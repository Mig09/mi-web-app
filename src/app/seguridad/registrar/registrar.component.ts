import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private segService: SeguridadService) { }

  ngOnInit(): void {
  }

  registrarUsuario(form: NgForm){
    this.segService.registrarUsuario({
      email: form.value.email,
      password: form.value.pass,
      apellidos: form.value.apellido,
      nombre: form.value.nombre,
      username: form.value.userName,
      userid: ''
    });
  }
}
