export class PaymentModel {
     name: string;
     school: string;
     price: string;
     type:string;
     contact: string;
     contactInfo: string;
   constructor(name: string, school: string, price: string, type: string, contact: string) {
       this.name = name;
       this.school = school;
       this.price = price;
       this.type = type;
       this.contact = contact;
  }
}