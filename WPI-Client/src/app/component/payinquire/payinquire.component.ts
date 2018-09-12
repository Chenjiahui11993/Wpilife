import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../Service/paymentService';
@Component({
  selector: 'app-payinquire',
  templateUrl: './payinquire.component.html',
  styleUrls: [
    './resources/css/style.css',
    './vendors/css/normalize.css',
    './vendors/css/grid.css',
    './vendors/css/ionicons.min.css',
    './vendors/css/animate.css',
    './resources/css/queries.css'
  ]
})
export class PayinquireComponent implements OnInit {
  status: boolean;
  userEmail: string;
  personData: Array<object> = [];
  constructor(private paymentService: PaymentService) {
    this.status = false;
  }

  ngOnInit() {
  }
  getInfo() {
    this.status = true;
    this.paymentService.inquirePayInfo(this.userEmail)
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          let information = data[i].order_info.split('/');
          var personObject = {
           'name': information[0],
           'school': information[1],
           'email': information[2],
           'price': data[i].real_price,
           'orderID':data[i].order_id
          }      
         this.personData[i] = personObject
        }
      });
  }

}
