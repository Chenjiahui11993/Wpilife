import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product-service';
import { HouseService } from '../Service/house-service';
import { BookService } from '../Service/book-service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private productService: ProductService, private houseService: HouseService,
    private bookService: BookService, private httpClient: HttpClient) { }
  name: string;
  address: string;
  price: number;
  ownerID = 0; // TODO: AUTH
  desc: string;
  type: string;
  department: string;
  contactInfo: string;
  imgUrl = [];
  times = [];
  selectedFile = null;
  i = 0;
  fd = new FormData();
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
  upload() {
    this.httpClient.post('api/v1/image', this.fd)
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          this.imgUrl[i] = `http://localhost:3000/api/v1/images/${res[i].filename}`;
        }
        this.addProduct(this.type);
      });
  }
  addProduct(type) {
    if (type === 'Others') {
      this.productService.setProduct(this.name, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl);
    }
    if (type === 'House') {
      this.houseService.setNewllHouse(this.address, this.desc, this.price, 'ownerOne', this.contactInfo, this.imgUrl);
    }
    if (type === 'Book') {
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
      this.productPriceError.hasError('required') || this.selected.hasError('require') || this.selectedBook.hasError('require')) {
      return true;
    } else {
      return false;
    }
  }
  onSecondSelect(k) { // add plus signal
    this.i = this.i + 1;
    this.times.push(1);
    console.log(this.times);
  }
  onFileSelect(event) {
    if (event.target.files.length === 0 && this.times.length === 0) { // when use click cancel when upload file
      this.fd.delete('logo');
      return 0;
    } else if ( event.target.files.length !== 0) {
      this.selectedFile = <File>event.target.files;
      for (const file of this.selectedFile) {
        this.fd.append('logo', file, file.name);
      }
    }
  }
  ngOnInit() {
  }
}
