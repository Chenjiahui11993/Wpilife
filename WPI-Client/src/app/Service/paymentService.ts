import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentModel } from '../component/payment/paymentModel';
@Injectable()
export class PaymentService {
    constructor (private httpClient: HttpClient) { }
    payment: PaymentModel;
    payInfo: any;
    getPayInfo() { 
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
        let item = {
            price : 0.10,
            type : 1
        };
        console.log('item');
        this.payment = new PaymentModel('Jiahui Chen', 'wpi', '0.10', '1','abc');
       return  this.httpClient.post('api/v1/pay', this.payment, options)
        .toPromise()
        .then((res: any) => {         
            return res;         
        })
        .catch(error => {
            console.log(error);
        })
    }
    pay(payInfo: any) {
        console.log(typeof payInfo);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             '})};
        let formData: FormData = new FormData();
        formData.append('api_user', payInfo.data.api_user);
        formData.append('price', payInfo.data.price);
        formData.append('type', payInfo.data.type);
        formData.append('redirect', payInfo.data.redirect);
        formData.append('order_id', payInfo.data.order_id);
        formData.append('order_info', payInfo.data.order_info);
        formData.append('signature', payInfo.data.signature);
        this.httpClient.post('https://www.paypayzhu.com/api/pay', formData, options)
        .subscribe();
    }

}