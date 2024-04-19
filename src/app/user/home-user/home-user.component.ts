import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from 'src/app/models/products';
import { CompartdoService } from 'src/app/services/compartdo.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  name: string = '';
  Usuario = '';
  listProducts: Product[] = [];
  constructor(private router: Router, private _productService: ProductService, private _Compartido: CompartdoService ) { }

  ngOnInit(): void {
    this.info();
    this.Usuario
    this.getProducts();
  }

  info() {
    this.name = localStorage.getItem('userName') || ''; // Provide a default value of an empty string
  }
  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {

        const acceptedProducts = data.products.filter((product: any) => product.status === 'accept');
      this.listProducts = acceptedProducts.slice(-4);

      },
      (error) => {
        console.log(error);
      }
    );
  }

  capturarTitulo(event: Event) {
    console.log("El método capturarTitulo se ha llamado");
    // Continúa con el resto de tu lógica aquí
    const h5Element = (event.currentTarget as HTMLElement).querySelector('.card-title');
    if (h5Element) {
        const tituloCategoria = h5Element.textContent;

        this._Compartido.setValorCategoria(tituloCategoria!);
        localStorage.setItem('categoria', tituloCategoria!);
        this.router.navigate(['/Catalogue']);
    }
}
}
