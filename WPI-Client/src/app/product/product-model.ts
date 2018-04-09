export class ProductModel {
    id: string;
    name: string;
    price: number;
    ownerID: string;
    description: string;
    imgUrl: string[];
    type: Boolean;
    contactInfo: string;
 constructor( name: string, price: number, ownerID: string, desc: string, contactInfo: string, img: string[], type: Boolean) {
    this.name = name;
    this.price = price;
    this.ownerID = ownerID;
    this.description = desc;
    this.imgUrl = img;
    this.contactInfo = contactInfo;
    this.type = type;
 }
}
