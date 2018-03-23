import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../Service/product-service';
import { ProductModel } from '../product/product-model';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle } from '@angular/platform-browser';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit, OnDestroy {
 path = '../../assets/product-1.jpg';
 public p: number;
 temp: number;
 user_photo: SafeUrl;
 subscriptionProducts: Subscription;
  constructor(private productService: ProductService, private router: Router,
     private activatedRouter: ActivatedRoute, private sanitization: DomSanitizer) {
    this.p = this.productService.getCurrentPage();
    console.log(this.p);
   }
  allProducts: ProductModel[] = [];
  ngOnInit() {
    this.subscriptionProducts = this.productService.getAllProduct()
    .subscribe(allProducts => this.allProducts = allProducts);
  }
  ngOnDestroy() {
    this.subscriptionProducts.unsubscribe();
  }
  ToProductDetail(id: number) {
    this.temp = id / 6;
    this.p = Math.ceil(this.temp);
   // console.log(this.p);
    this.router.navigate(['/product-list', id, id, 'desc']);
    this.productService.setCurrentPage(this.p);
  }
}
