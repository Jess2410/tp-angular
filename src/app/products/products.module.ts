import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCompareComponent } from './products-compare/products-compare.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductsSearchComponent,
    ProductsListComponent,
    ProductsCompareComponent,
    ProductDetailsComponent
  ],
  imports: [
    SharedModule,
    AgGridModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
