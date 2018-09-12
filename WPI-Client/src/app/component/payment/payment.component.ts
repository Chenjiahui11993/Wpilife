import { Component, OnInit, ViewChildren } from '@angular/core';
import { PaymentService } from '../../Service/paymentService';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  constructor(private paymentService: PaymentService) { }
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
  UserPhone: string;
  ngOnInit() {
  }
  nameValidator = new FormControl('valid', [
    Validators.required
  ]);
  schoolValidator = new FormControl('valid', [
    Validators.required
  ]);
  typeValidator = new FormControl('valid', [
    Validators.required
  ]);
  getInfo() {
    if (this.type == 3) {

    } else {
      this.paymentService.getPayInfo(this.UserName, this.UserEmail, this.UserSchool, this.type, this.UserPhone)
        .then(paypay => {
          this.paypayzhu = paypay;
          this.ApiUser = this.paypayzhu.api_user;
          this.price = this.paypayzhu.price;
          this.redirect = this.paypayzhu.redirect;
          this.orderID = this.paypayzhu.order_id;
          this.orderInfo = this.paypayzhu.order_info;
          this.signature = this.paypayzhu.signature;
          this.payType = this.type;
          setTimeout(() => {  // angular needs some time to bind data ?
            this.defaultForm.first.nativeElement.submit();
          }, 500)

        })
        .catch((e) => {
          console.log(e);
        });

    }
  }
}
