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
  showBooks: BookModel[] = [];
  showProducts: ProductModel[] = [];
  showHouses: HouseModel[] = [];
  constructor(private houserService: HouseService, private bookService: BookService, private productService: ProductService) { }

  ngOnInit() {
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
