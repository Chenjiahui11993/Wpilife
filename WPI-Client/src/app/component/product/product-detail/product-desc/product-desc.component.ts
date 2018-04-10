import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../Service/product-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from '../../product-model';
@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {
  ProductDetail: ProductModel;
  id: number;
  price: number;
  desc: string;
  constructor(private productService: ProductService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRouter.params
    .subscribe(
      (params: Params) => {
      this.id = params['id'];
      }
    );
    this.productService.getProduct(this.id)
    .then((product) => {
      this.ProductDetail = product;
      this.price = this.ProductDetail.price;
      this.desc = this.ProductDetail.description;
    })
    .catch((e) => {
      console.log(e);
    });
    this.price = this.ProductDetail.price;
    this.desc = this.ProductDetail.description;
    console.log(this.desc);
    }
}
