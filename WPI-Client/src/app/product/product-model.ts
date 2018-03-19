export class ProductModel {
    id: string;
    name: string;
    price: number;
    ownerID: number;
    desc: string;
    img: string[];
    type: string;
    contactInfo: string;
 constructor( name: string, price: number, ownerID: number, desc: string, contactInfo: string, img: string[] ) {
    this.name = name;
    this.price = price;
    this.ownerID = ownerID;
    this.desc = desc;
    this.img = img;
    this.contactInfo = contactInfo;
 }
}
