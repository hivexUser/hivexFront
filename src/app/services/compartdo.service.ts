import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartdoService {
categora: string = '';


  constructor() { }

  setValorCategoria(categoria: string) {
    this.categora = categoria;
  }
  getValorCategoria() {
    return this.categora;
  }
}


