import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'st-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit  {

  constructor(private productService: ProductService,private route: ActivatedRoute, private elementRef: ElementRef)
  {
    this.src = this.elementRef.nativeElement.getAttribute('src')
  }

  src!: String
  product!: Product
  mainImageUrl!: String

    ngOnInit(): void {
      const product_id = this.route.snapshot.paramMap.get('productId')!;
        this.productService.getDocById(product_id)
        console.log(this.productService.getDocById(product_id))

        this.productService.getDocById(product_id).subscribe((product) => {
          this.product = product
          this.mainImageUrl = product.images[0]


          });
    }

    setImage(img: string) {
      //console.log(img);
      this.mainImageUrl = img;
    }

}
