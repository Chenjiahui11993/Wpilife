import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { ProductModel } from '../../product/product-model';
import { ProductService } from '../../Service/product-service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../product.component.css',
              './product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public itemsList: string[] = [];
  public Config: NgxCarousel;
  ProductDetail: ProductModel;
  id: number;
  constructor(private productService: ProductService, private activateRouter: ActivatedRoute, private router: Router ) {
    this.Config = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: true
      },
      loop: true,
      touch: false
    };
  }
  ngOnInit() {
  this.activateRouter.params
  .subscribe(
    (params: Params) => {
    this.id = params['id'];
    }
  );
  this.productService.getProduct((this.id - 1))
  .then((product) => this.ProductDetail = product)
  .catch((e) => {
    console.log(e);
  });
  }
}
