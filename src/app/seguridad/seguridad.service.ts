import {Usuario} from './usuario.model';
import {LoginData} from './login-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class SeguridadService{
  seguridadCambio = new Subject<boolean>();
  private usuario: Usuario;

  constructor(private router: Router){

  }


  registrarUsuario(urs: Usuario){
    this.usuario = {
      email: urs.email,
      password: urs.password,
      userid: Math.round(Math.random()*10000).toString(),
      nombre: urs.nombre,
      apellidos: urs.apellidos,
      username: urs.username
    };

    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }


  login(loginData: LoginData){
    this.usuario = {
      email: loginData.email,
      password: loginData.password,
      userid: Math.round(Math.random()*10000).toString(),
      nombre: '',
      apellidos:'',
      username: ''
    }

    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  salirSesion(){
    this.usuario = null;
    this.seguridadCambio.next(false);
    this.router.navigate(['/login'])
  }

  obtenerUsuario(){
    return{...this.usuario};
  }

  onSesion(){
    return this.usuario != null;
  }
}
