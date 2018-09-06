import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../Service/paymentService';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
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
