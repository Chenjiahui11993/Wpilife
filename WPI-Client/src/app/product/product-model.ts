export class ProductModel {
    id: string;
    name: string;
    price: number;
    ownerID: number;
    description: string;
    imgUrl: string[];
    type: string;
    contactInfo: string;
 constructor( name: string, price: number, ownerID: number, desc: string, contactInfo: string, img: string[] ) {
    this.name = name;
    this.price = price;
    this.ownerID = ownerID;
    this.description = desc;
    this.imgUrl = img;
    this.contactInfo = contactInfo;
 }
}
