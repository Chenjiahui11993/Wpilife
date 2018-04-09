import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../product/product-model';
import { AuthService } from '../Service/auth.service';
/** Error when invalid control is dirty, touched, or submitted. */
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(public auth: AuthService) {
    //  auth.handleAuthentication();
  }
   x = 1;
  ngOnInit() {
    // this.httpClient.get('api/v1/images')
    // .subscribe();
  }

  show() {
  // let x = 2;
  // let y = 2;
   // (function () {
     // let x = 3;
     // console.log(this.x);
  //  }());
  this.show2();
  }
  show2() {
    console.log(this.x);
  }
}
