import { Component, OnInit, OnChanges } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
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
export class HomeComponentComponent implements OnInit, OnChanges {
  bookModel: BookModel[] = [];
  productModel: ProductModel[] = [];
  houseModel: HouseModel[] = [];
  bookLength: number;
  houseLength: number;
  productLength: number;
  allList = [];
  constructor(private houserService: HouseService, private bookService: BookService, private productService: ProductService) {
    this.bookLength = this.bookService.getALLBooks().length;
    this.houseLength = this.houserService.getAllHouses().length;
    this.productLength = this.productService.getAllProduct().length;
  }

  ngOnInit() {
    this.bookModel = this.bookService.getALLBooks().slice((this.bookLength - 9), (this.bookLength - 1));
    this.houseModel = this.houserService.getAllHouses().slice((this.houseLength - 9), (this.houseLength - 1));
    this.productModel = this.productService.getAllProduct().slice((this.productLength - 9), (this.productLength - 1));
    this.allList[0] = this.houseModel[7];
    this.allList[1] = this.houseModel[6];
    this.allList[2] = this.bookModel[7];
    this.allList[3] = this.bookModel[6];
    this.allList[4] = this.bookModel[5];
    this.allList[5] = this.productModel[7];
    this.allList[6] = this.productModel[6];
    this.allList[7] = this.productModel[5];
  }
  ngOnChanges() {
   console.log('shuaxinla');
  }

}
