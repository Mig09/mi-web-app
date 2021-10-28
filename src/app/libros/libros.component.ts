import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: 'libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy{

  libros: string[] = [];

  private libroSubscription: Subscription = new Subscription;

  constructor(private librosService: LibrosService){

  }



  eliminarLibro(libro: string){

  }

  guardarLibro(f: any){
    if(f.valid){
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(){
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(()=> {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }

}
