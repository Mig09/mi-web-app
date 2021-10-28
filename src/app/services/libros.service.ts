import { Subject } from "rxjs";

export class LibrosService {

  librosSubject = new Subject();

  private libros = ['Libro AA','Libro AB', 'Libro AC'];




  agregarLibro(libroNombre: string){
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros(){
    return [...this.libros];
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(aux => aux !== libroNombre);
    this.librosSubject.next();
  }



}
