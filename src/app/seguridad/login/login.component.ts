import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private segService: SeguridadService) { }

  ngOnInit(): void {
  }


  loginUsuario(form: NgForm){
    this.segService.login({
      email: form.value.email,
      password: form.value.pass
    });
  }
}
