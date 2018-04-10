import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { BookService } from '../../Service/book-service';
import { BookModel } from '../book/book-model';
import { ProductModel } from '../product/product-model';
import { HouseModel } from '../house/house.model';
import { ProductService } from '../../Service/product-service';
import { ViewEncapsulation } from '@angular/core';
import { HouseService } from '../../Service/house-service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../product/product.component.css',
    './profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  bookModel: BookModel[] = [];
  productModel: ProductModel[] = [];
  houseModel: HouseModel[] = [];
  constructor(private authService: AuthService, private bookService: BookService, private productService: ProductService,
    private houseService: HouseService) {
    // this.profile = JSON.parse(localStorage.getItem('profile'));
  }
  ngOnInit() {
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      this.getProducts(this.profile.name);
      this.getBooks(this.profile.name);
      this.getHouses(this.profile.name);

    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        this.getProducts(this.profile.name);
        this.getBooks(this.profile.name);
        this.getHouses(this.profile.name);
      });
    }
  }
  getProducts(name: string) {
    this.productService.getUserProduct(name)
      .then((products) => {
        this.productModel = products;
        console.log(this.productModel);
      })
      .catch((e) => console.log(e));
  }
  getBooks(name: string) {
    this.bookService.getUserBooks(name)
      .then((books) => {
        this.bookModel = books;
        // console.log(this.productModel);
      })
      .catch((e) => console.log(e));
  }
  getHouses(name: string) {
    this.houseService.getUserhouse(name)
      .then((houses) => {
        this.houseModel = houses;
        console.log(this.productModel);
      })
      .catch((e) => console.log(e));
  }
  onDeleteHouse(item: HouseModel) {
    this.houseService.deleteHouse(item.id);
  }
  onDeleteBook(item: BookModel) {
    this.bookService.deleteBook(item.id);
  }
  onDeleteProduct(item: ProductModel) {
    this.productService.deleteProduct(+item.id);
  }
}
