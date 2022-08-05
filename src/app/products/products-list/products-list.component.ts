import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
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

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.productService.getAllDocs().subscribe((data) => {
      this.products = (data);
      console.log(this.products)
    });
  }

  handleRowClick($event: Event|any){
    const product_id = $event.data._id
    this.router.navigateByUrl(`/products/${product_id}`)
  }

  // onSelectionChanged($event: Event|any) {
  //   console.log($event); // verify that the method is fired upon selection
  //   // do the rest
  // }

}
