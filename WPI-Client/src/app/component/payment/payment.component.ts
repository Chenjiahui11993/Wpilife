import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { PaymentService } from '../../Service/paymentService';
import { FormsModule, NgForm } from '@angular/forms';
import { paypayzhuModel } from './paypayzhuModel';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: [
    './resources/css/style.css',
    './vendors/css/normalize.css',
    './vendors/css/grid.css',
    './vendors/css/ionicons.min.css',
    './vendors/css/animate.css',
    './resources/css/queries.css',
    './payment.component.css'
  ]
})
export class PaymentComponent implements OnInit {
   paypayzhu: paypayzhuModel;
  constructor( private paymentService: PaymentService) { }
  @ViewChildren('defaultForm') defaultForm: HTMLFormElement;
  ApiUser: string;
  price: string;
  redirect: string;
  orderID: string;
  orderInfo: string;
  signature: string;
  UserName: string;
  UserEmail: string;
  UserSchool: string;
  PayMethod: string;
  type: number;
  payType: number;
  ngOnInit() {
  }
  getInfo(type: number) {
  //  this.ApiUser = '1234';
   // console.log(this.defaultForm.last.nativeElement);
    this.paymentService.getPayInfo(this.UserName, this.UserEmail, this.UserSchool, type)
        .then (paypay => {
     this.paypayzhu = paypay;   
     this.ApiUser = this.paypayzhu.api_user;
     this.price = this.paypayzhu.price;
     this.redirect = this.paypayzhu.redirect;
     this.orderID = this.paypayzhu.order_id;
     this.orderInfo = this.paypayzhu.order_info;
     this.signature = this.paypayzhu.signature;
     this.payType = type;
     console.log(this.defaultForm.first);
     //this.defaultForm.first.nativeElement.submit();
    // this.defaultForm.first.nativeElement.submit();
    })
    .catch((e) => {
      console.log(e);
    });   
  }
  try() {
    this.defaultForm.first.nativeElement.submit();
  }
}
