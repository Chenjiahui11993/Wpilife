import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product-service';
import { HouseService } from '../../Service/house-service';
import { BookService } from '../../Service/book-service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http';
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
  price: string;
  ownerID: string; // TODO: AUTH
  desc: string;
  type: string;
  department: string;
  contactInfo: string;
  imgUrl = [];
  names = [];
  selectedFile = [];
  i = 0;
  profile: any;
  fd = new FormData();
  size = 0;
  userImagesNames: number;
  fileSizeError = [];
  fileTypeError = [];
  uploadProcess = false;
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
  options = ['Book', 'House', 'Others', 'Demand'];
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
    console.log(this.ownerID + 'zheshi owner ID');
  }
  upload() {
    console.log(this.selectedFile + 'shang chuan wenjian');
    for (const file of this.selectedFile) {
      if (file !== null) {
        this.fd.append('logo', file[0], file.name);
      }
    }
    this.httpClient.post('api/v1/image', this.fd,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')),
        observe: 'events', reportProgress: true
      })
      .subscribe((res: any) => {
        if (res.type === HttpEventType.UploadProgress) {
          this.uploadProcess = true;
          console.log('uploading');
          console.log(res);
        } else if (res instanceof HttpResponse) {
          console.log('upload successful');
          console.log(res);
          for (let i = 0; i < res.body.length; i++) {
            this.imgUrl[i] = `${window.location.origin}/api/v1/images/${res.body[i]}`;
            console.log(this.imgUrl[i]);
          }
          this.addProduct(this.type);
        }
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
    if (type === 'Demand') {
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
  isDemand(option) {
    if (option === 'Demand') {
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
    this.selectedFile[this.i] = null;
    console.log(this.names);
  }
  onFileSelect(event) {
    console.log(event);
    // this.size = event.target.files[0].size / 1024;
    this.userImagesNames = event.target.name;
    // console.log(this.size);
    if (event.target.files.length === 0) { // when use click cancel when upload file
      this.selectedFile[this.userImagesNames] = null;
      console.log('wen jian qu xiao');
      return 0;
    } else if (event.target.files.length !== 0 && (event.target.files[0].size / 1024) < 1024) {
      this.fileTypeError[this.userImagesNames] = this.checkTypeError(event.target.files[0].name);
      this.fileSizeError[event.target.name] = false;
      // this.userImagesNames = event.target.name;
      if (!this.fileTypeError[this.userImagesNames]) {
        this.selectedFile[this.userImagesNames] = event.target.files;
        console.log(this.selectedFile[this.userImagesNames][0]);
        console.log(this.selectedFile);
      }
      //  console.log(this.selectedFile);
    } else if ((event.target.files[0].size / 1024) > 1024) {
      this.fileSizeError[this.userImagesNames] = true;
      console.log(+this.userImagesNames);
      console.log('image are to large !');
      return 0;
    }
  }
  checkFileError(i) {
    return this.fileSizeError[i];
  }
  checkTypeError(filename: string) {
    let fileType = filename.toLocaleLowerCase().split('.');
    if (fileType[1].includes('jpg') || fileType[1].includes('png') || fileType[1].includes('bmp') || fileType[1].includes('jpeg')) {
      console.log(fileType[1]);
      return false;
    } else {
      return true;
    }
  }
}
