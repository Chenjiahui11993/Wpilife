import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../Service/paymentService';
import { FormsModule } from '@angular/forms';
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
    //  './resources/js/script.js',
    //  './vendors/js/jquery.min.js']
})
export class PaymentComponent implements OnInit {

  constructor( private paymentService: PaymentService) { }
  payInfo: any;
  ngOnInit() {
  }
  pay() {
    this.paymentService.getPayInfo()
    .then ( res => {
      this.payInfo = JSON.parse(res);
    });
   
  }
  tijiao() {
    console.log('123');
  }

}
