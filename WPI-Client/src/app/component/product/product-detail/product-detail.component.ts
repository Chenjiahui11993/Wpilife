import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { ProductModel } from '../../product/product-model';
import { ProductService } from '../../../Service/product-service';
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
  price: string;
  name: string;
  desc: string;
  ownerID: string;
  contactInfo: string;
  date: string;
  imgUrl = [];
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
    this.productService.getProduct((this.id))
    .then(product => {
      this.ProductDetail = product;
      this.name = this.ProductDetail.name;
      this.price =  this.ProductDetail.price;
      this.desc = this.ProductDetail.description;
      this.contactInfo = this.ProductDetail.contactInfo;
      this.imgUrl = this.ProductDetail.imgUrl;
      this.ownerID = this.ProductDetail.ownerID;
      this.date = this.ProductDetail.today;
    })
    .catch((e) => {
      this.router.navigate(['/Not-found']);
    });
    }
  );
  }
}
