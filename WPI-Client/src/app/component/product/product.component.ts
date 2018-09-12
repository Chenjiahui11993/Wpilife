import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../../Service/product-service';
import { FormControl } from '@angular/forms';
import { ProductModel } from '../product/product-model';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  searchValue = '';
   p: number;
  temp: number;
  allProducts: ProductModel[] = [];
  searchBox: FormControl = new FormControl();
  subscriptionProducts: Subscription;
  subscriptionInput: Subscription;
  constructor(private productService: ProductService, private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.p = this.productService.getCurrentPage();
  }
  ngOnInit() {
    this.subscriptionProducts = this.productService.getAllProduct()
      .subscribe(allProducts => {
        this.allProducts = allProducts;
        this.allProducts = this.allProducts.reverse();
      });
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
    this.subscriptionInput.unsubscribe();
  }
  ToProductDetail(id: number) {
    this.productService.setCurrentPage(this.p);
    this.router.navigate(['/product-list', id]);
    this.productService.setCurrentPage(this.p);
  }
  getPageNumber(event) {
    this.p = event;
  }
}
