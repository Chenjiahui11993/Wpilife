import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product-service';
import { HouseService } from '../../Service/house-service';
import { BookService } from '../../Service/book-service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../Service/auth.service';
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
  name: string;
  address: string;
  price: number;
  ownerID: string; // TODO: AUTH
  desc: string;
  type: string;
  department: string;
  contactInfo: string;
  imgUrl = [];
  names = [];
  selectedFile = null;
  i = 0;
  profile: any;
  fd = new FormData();
  size = 0;
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
  constructor(private productService: ProductService, private houseService: HouseService,
    private bookService: BookService, private httpClient: HttpClient, public authService: AuthService) { }
  ngOnInit() {
    if (this.authService.userProfile && this.authService.isAuthenticated()) {
      this.profile = this.authService.userProfile;
      this.ownerID = this.profile.name;
      console.log(this.profile);
    } else if (this.authService.isAuthenticated()) {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        this.ownerID = this.profile.name;
      });
    }
    console.log(this.ownerID);
  }
  upload() {
    this.httpClient.post('api/v1/image', this.fd)
      .subscribe((res: any) => {
        //   console.log(res);
        for (let i = 0; i < res.length; i++) {
          console.log(res);
          this.imgUrl[i] = `${window.location.origin}/api/v1/images/${res[i]}`;
          console.log(this.imgUrl[i]);
        }
        this.addProduct(this.type);
      });
  }
  addProduct(type) {
    if (type === 'Others') {
      this.productService.setProduct(this.name, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl, true);
    }
    if (type === 'House') {
      this.houseService.setNewllHouse(this.address, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl);
    }
    if (type === 'Book') {
      this.bookService.setBook(this.name, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl, this.department);
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
    this.names.push(this.i);
    console.log(this.names);
  }
  onFileSelect(event) {
    console.log(event);
    if (event.target.files.length === 0 && this.names.length === 0) { // when use click cancel when upload file
      this.fd.delete('logo');
      return 0;
    } else if (event.target.files.length !== 0 && this.size < 1024) {
      this.selectedFile = <File>event.target.files;
      console.log(this.selectedFile);
      console.log(this.selectedFile[0].size / 1024);
      for (const file of this.selectedFile) {
        this.fd.append('logo', file, file.name);
      }
    } else {
      console.log('image are to large !');
      return 0;
    }
  }

}
