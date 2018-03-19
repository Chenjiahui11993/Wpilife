import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product-service';
import { HouseService } from '../Service/house-service';
import { BookService } from '../Service/book-service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['../product/product.component.css',
    './sell.component.css']
})
export class SellComponent implements OnInit {
  Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
  constructor(private productService: ProductService, private houseService: HouseService, private bookService: BookService) { }
  name: string;
  address: string;
  price: number;
  ownerID = 0; // TODO: AUTH
  desc: string;
  type: string;
  department: string;
  contactInfo: string;
  imgUrl: string[];
  selected = new FormControl('valid', [
    Validators.required
  ]);
  selectedBook = new FormControl('valid', [
    Validators.required
  ]);
  productNameError = new FormControl('', [
    Validators.required
  ]);
  productPriceError = new FormControl('', [
    Validators.required
  ]);
  productContactError = new FormControl('', [
    Validators.required
  ]);
  options = ['Book', 'House', 'Others'];
  matcher = new MyErrorStateMatcher();
  addProduct(type) {
    if (this.type === 'Others') {
      this.productService.setProduct(this.name, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl);
    }
    if (this.type === 'House') {
      this.houseService.setNewllHouse(this.address, this.desc, this.price, 'ownerOne', this.contactInfo);
    }
    if (this.type === 'Book') {
      this.bookService.setBook(this.name, this.department, 0, this.price, this.contactInfo, this.imgUrl);
    }
  }
  isOthers(option) {
    if (option === 'Others') {
      return true;
    }
  }
  isHouse(option) {
    if (option === 'House') {
      return true;
    }
  }
  isBook(option) {
    if (option === 'Book') {
      return true;
    }
  }
  isDisable() {
    if (this.productNameError.hasError('required') || this.productContactError.hasError('required') ||
      this.productPriceError.hasError('required') || this.selected.hasError('require')) {
      return true;
    } else {
      return false;
    }
  }
  isBookDisable() {
    if (this.productNameError.hasError('required') || this.productContactError.hasError('required') ||
      this.productPriceError.hasError('required') || this.selected.hasError('require') || this.selectedBook.hasError('require'))  {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {
  }
}
