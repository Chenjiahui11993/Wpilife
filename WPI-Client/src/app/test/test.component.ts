import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../product/product-model';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  imgSrc = '../../../../WPI-Server/upload/1.png';
  product = new ProductModel('test', 100, 1, 'good', '123456', []);
  constructor(private httpClient: HttpClient) { }
  selectedFile = null;
  onFileSelect(event) {
    this.selectedFile = event.target.files;
    console.log(event);
  }
  ngOnInit() {
   // this.httpClient.get('api/v1/images')
   // .subscribe();
  }
  upload() {
    const fd = new FormData();
    fd.append('logo', this.selectedFile[0], this.selectedFile.name);
    fd.append('logo', this.selectedFile[1], this.selectedFile.name);
    this.httpClient.post('api/v1/image', fd)
      .subscribe(res => console.log(res));
  }
}
