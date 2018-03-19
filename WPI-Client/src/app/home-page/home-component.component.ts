import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HouseService } from '../Service/house-service';
import { ProductService } from '../Service/product-service';
import { BookService } from '../Service/book-service';
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
  bookModel: BookModel[] = [];
  productModel: ProductModel[] = [];
  houseModel: HouseModel[] = [];
  bookLength: number;
  houseLength: number;
  productLength: number;
  subscriptionProducts: Subscription;
  subscriptionBooks: Subscription;
  subscriptionHouse: Subscription;
  allList = [];
  constructor(private houserService: HouseService, private bookService: BookService, private productService: ProductService) { }

  ngOnInit() {
    this.subscriptionHouse = this.houserService.getAllHouses()
      .subscribe(allhouse => this.houseModel = allhouse);
    this.houseLength = this.houseModel.length;
    this.subscriptionBooks = this.bookService.getALLBooks()
      .subscribe((allBooks) => {
        this.bookModel = allBooks;
      });
    this.bookLength = this.bookModel.length;
    this.bookModel.slice((this.productLength - 9), (this.productLength - 1));
    this.subscriptionProducts = this.productService.getAllProduct()
      .subscribe((allProduct) => this.productModel = allProduct);
    this.productLength = this.productModel.length;
    this.productModel.slice((this.productLength - 9), (this.productLength - 1));
    this.allList[0] = this.houseModel[7];
    this.allList[1] = this.houseModel[6];
    this.allList[2] = this.bookModel[7];
    this.allList[3] = this.bookModel[6];
    this.allList[4] = this.bookModel[5];
    this.allList[5] = this.productModel[7];
    this.allList[6] = this.productModel[6];
    this.allList[7] = this.productModel[5];
  }
  ngOnDestroy() {
    this.subscriptionProducts.unsubscribe();
  }
  isHouse(i) {
    console.log('执行了');
    if (i.type === 'HOUSE') {
      return true;
    }
  }
  isBook(i) {
    console.log('执行了');
    if (i.type === 'BOOK') {
      return true;
    }
  }
  isProduct(i) {
    if (i.type === 'Product') {
      console.log('执行了');
      return true;
    }
  }
}
