export class paypayzhuModel {
    api_user: string;
    redirect: string;
    price: string;
    order_id: string;
    order_info: string;
    signature: string;
  constructor(api_user: string, redirect: string, price: string, order_id: string, order_info: string, signature: string) {
      this.api_user = api_user;
      this.redirect = redirect;
      this.price = price;
      this.order_id = order_id;
      this.order_info = order_info;
      this.signature = signature;
 }
}