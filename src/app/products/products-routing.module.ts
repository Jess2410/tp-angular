import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsCompareComponent } from './products-compare/products-compare.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSearchComponent } from './products-search/products-search.component';


const routes: Routes = [
  {path: "products", component: ProductsListComponent, data: {
    title: 'Products List'
  }},
  {path: "products/search", component: ProductsSearchComponent, data: {
    title: 'Search products'
  }},
  {path: "products/compare", component: ProductsCompareComponent, data: {
    title: 'Compare products'
  }},
  {path: "products/:productId", component: ProductDetailsComponent, data: {
    title: 'Product detail'
  }},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
