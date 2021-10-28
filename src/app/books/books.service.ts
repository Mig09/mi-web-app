import { Books } from "./books.model";
import { Subject } from "rxjs";


export class BooksService{

  private booksLista: Books[] = [
    {libroId: 1, titulo: 'Alibro1', descripcion: 'desc1', autor: 'Migg', precio: 19},
    {libroId: 2, titulo: 'Zlibro2', descripcion: 'desc2', autor: 'Anto', precio: 29},
    {libroId: 3, titulo: 'Slibro3', descripcion: 'desc3', autor: 'Sara', precio: 39}
  ];

  bookSubject = new Subject<Books>();

  obtenerLibros(){
    return this.booksLista.slice();
  }

  agregaLibro(book: Books){
    this.booksLista.push(book);
    this.bookSubject.next(book);
  }
}
