import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentModel } from '../component/payment/paymentModel';
import{  paypayzhuModel } from '../component/payment/paypayzhuModel';
@Injectable()
export class PaymentService {
    constructor (private httpClient: HttpClient) { }
    payment: PaymentModel;
    payInfo: any;
    getPayInfo(UserName: string, UserEmail: string, UserSchool: string, payMethod: number): Promise<paypayzhuModel> { 
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
        this.payment = new PaymentModel(UserName, UserSchool, '0.10', payMethod, UserEmail);
       return  this.httpClient.post('api/v1/pay', this.payment, options)
        .toPromise()
        .then((res: any) => {                                   
            return JSON.parse(res);
        })
        .catch(error => {
            console.log(error);
        })
    }
}