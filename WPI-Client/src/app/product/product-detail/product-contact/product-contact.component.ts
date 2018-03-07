import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Service/product-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from '../../product-model';
@Component({
  selector: 'app-product-contact',
  templateUrl: './product-contact.component.html',
  styleUrls: ['./product-contact.component.css']
})
export class ProductContactComponent implements OnInit {
  ProductDetail: ProductModel;
  id: number;
  owner: number;
  constructor(private productService: ProductService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRouter.params
    .subscribe(
      (params: Params) => {
      this.id = params['id'];
      }
    );
    this.ProductDetail = this.productService.getProduct(this.id - 1);
    this.owner = this.ProductDetail.ownerID;
    console.log(this.owner);
  }

}
