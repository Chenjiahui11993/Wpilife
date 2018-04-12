import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../../Service/product-service';
import { FormControl } from '@angular/forms';
import { ProductModel } from '../product/product-model';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle } from '@angular/platform-browser';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit, OnDestroy {
  searchBox: FormControl = new FormControl();
  searchValue = '';
  public p: number;
  temp: number;
  user_photo: SafeUrl;
  subscriptionProducts: Subscription;
  subscriptionInput: Subscription;
  constructor(private productService: ProductService, private router: Router,
    private activatedRouter: ActivatedRoute, private sanitization: DomSanitizer) {
    this.p = this.productService.getCurrentPage();
    console.log(this.p);
  }
  allProducts: ProductModel[] = [];
  ngOnInit() {
    this.subscriptionProducts = this.productService.getAllProduct()
      .subscribe(allProducts => this.allProducts = allProducts);
      this.subscriptionInput = this.searchBox
      .valueChanges
      .debounceTime(200)
      .subscribe(
        term => {
          this.searchValue = term;
        }
      );
  }
  ngOnDestroy() {
    this.subscriptionProducts.unsubscribe();
  }
  ToProductDetail(id: number) {
    this.temp = id / 6;
    this.p = Math.ceil(this.temp);
    // console.log(this.p);
    this.router.navigate(['/product-list', id]);
    this.productService.setCurrentPage(this.p);
  }
}
