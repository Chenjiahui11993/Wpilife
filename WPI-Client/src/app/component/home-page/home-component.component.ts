import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { HouseService } from '../../Service/house-service';
import { ProductService } from '../../Service/product-service';
import { BookService } from '../../Service/book-service';
import { BookModel } from '../book/book-model';
import { ProductModel } from '../product/product-model';
import { HouseModel } from '../house/house.model';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponentComponent implements OnInit, OnDestroy {
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  bookModel: BookModel[] = [];
  productModel: ProductModel[] = [];
  houseModel: HouseModel[] = [];
  bookLength: number;
  houseLength: number;
  productLength: number;
  subscriptionProducts: Subscription;
  subscriptionBooks: Subscription;
  subscriptionHouse: Subscription;
  showBooks: BookModel[] = [];
  showProducts: ProductModel[] = [];
  showHouses: HouseModel[] = [];
  constructor(private houserService: HouseService, private bookService: BookService,
    private productService: ProductService, private location: Location, private router: Router) {
    this.houserService.setCurrentPage(0);
    this.bookService.setCurrentPage(0);
    this.productService.setCurrentPage(0);
  }
  ngOnInit() {
    this.lastPoppedUrl = '/';
    this.location.subscribe((ev: PopStateEvent) => {
      console.log(ev.url + 'zhi xing le');
      if (ev.url === '') {
        console.log('kongde');
        this.lastPoppedUrl = '/';
      } else {
        this.lastPoppedUrl = ev.url;
      }
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url !== this.lastPoppedUrl ) {
          console.log('show ye bao cun' + this.lastPoppedUrl);
          console.log('show ye bao cun 2' + ev.url);
          this.yScrollStack.push(window.scrollY);
        }
      } else if (ev instanceof NavigationEnd) {
        if (ev.url === this.lastPoppedUrl) {
          console.log('pi pei le ');
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
    this.subscriptionHouse = this.houserService.getAllHouses()
      .subscribe(allhouse => {
        this.houseModel = allhouse;
        this.houseLength = this.houseModel.length;
        this.showHouses = this.houseModel.slice((this.houseLength - 8), this.houseLength);
      });
    this.subscriptionBooks = this.bookService.getALLBooks()
      .subscribe((allBooks) => {
        this.bookModel = allBooks;
        this.bookLength = this.bookModel.length;
        this.showBooks = this.bookModel.slice((this.bookLength - 8), this.bookLength);
      });
    this.subscriptionProducts = this.productService.getAllProduct()
      .subscribe((allProduct) => {
        this.productModel = allProduct;
        this.productLength = this.productModel.length;
        this.showProducts = this.productModel.slice((this.productLength - 8), this.productLength);
      });
  }
  ngOnDestroy() {
    this.subscriptionProducts.unsubscribe();
    this.subscriptionBooks.unsubscribe();
    this.subscriptionHouse.unsubscribe();
  }
}
