import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../seguridad/seguridad.service';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit, OnDestroy {

  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean;
  subscription: Subscription;

  constructor(private segService: SeguridadService) {

   }

  ngOnInit(): void {
    this.subscription = this.segService.seguridadCambio.subscribe(status =>{
      this.estadoUsuario = status
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onCerrarMenu(){
    this.menuToggle.emit();
  }

  terminarSesionMenu(){
    this.onCerrarMenu();
    this.segService.salirSesion();
  }
}
