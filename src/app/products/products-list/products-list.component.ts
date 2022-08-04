import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'st-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: any[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllDocs().subscribe((data) => {
      this.products.push(data);
      console.log(this.products)
    });
  }

}
