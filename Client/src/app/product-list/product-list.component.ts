import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/cursos-http.service';

import { Product } from '../modules/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(@Inject(String) private productService: ProductService) { }

  products!: Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProducts();
        },
        err => console.log(err)
      )
  }

}
