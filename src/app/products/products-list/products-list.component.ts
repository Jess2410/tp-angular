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
   { field: '_id', sortable:true, resizable: true, flex: 1, pinned: true,
   lockPinned: true, cellClass: 'lock-pinned', checkboxSelection:true  },
   { field: 'name', sortable:true, resizable: true, flex: 1    },
   { field: 'additionalFeatures', sortable:true, resizable: true, flex: 3}
  ]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllDocs().subscribe((data) => {
      this.products = (data);
      console.log(this.products)
    });
  }

}
