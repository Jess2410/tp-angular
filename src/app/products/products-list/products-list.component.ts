import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'st-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  products: Products[] | undefined

  columnDefs =
  [
   { field: '_id' },
   { field: 'name' },
   { field: 'additionalFeatures' }
  ];

// rowData = Products

  // rowData = [
  //   { _id: "Toyota", name: "Celica", additionalFeatures: 35000 },
  //   { _id: "Ford", name: "Mondeo", additionalFeatures: 32000 },
  //   { _id: "Porsche", name: "Boxter", additionalFeatures: 72000 }
  // ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllDocs().subscribe((data) => {
      this.products = (data);
      console.log(this.products)
    });
  }

}
