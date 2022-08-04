import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {path : "", component: HomeComponent, data: {
    title: 'Home'
  }},
  {path : "about", component: AboutComponent, data: {
    title: 'About'
  }},
  {path : "**", component: NotFoundComponent, data: {
    title: 'Not Found'
  }},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Title]
})

export class AppRoutingModule { }
