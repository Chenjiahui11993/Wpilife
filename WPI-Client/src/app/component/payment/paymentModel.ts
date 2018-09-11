export class PaymentModel {
     name: string;
     school: string;
     price: string;
     PayMethod:number;
     contact: string;
     email: string;
     userPhone: string;
   constructor(name: string, school: string, price: string, PayMethod: number, email: string, phoneNumber) {
       this.name = name;
       this.school = school;
       this.price = price;
       this.PayMethod = PayMethod;
       this.email = email;
       this.userPhone = phoneNumber;
  }
}