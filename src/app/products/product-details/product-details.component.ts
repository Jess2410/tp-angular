import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'st-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    ) {


      const product_id: string|null = this.route.snapshot.paramMap.get('id');

      console.log("🚀 ~ file: product-details.component.ts ~ line 22 ~ ProductDetailsComponent ~ ngOnInit ~ product_id", product_id)




    }
}
