export class PaymentModel {
     name: string;
     school: string;
     price: string;
     PayMethod:number;
     contact: string;
     email: string;
   constructor(name: string, school: string, price: string, PayMethod: number, email: string) {
       this.name = name;
       this.school = school;
       this.price = price;
       this.PayMethod = PayMethod;
       this.email = email;
  }
}