export class ProductModel {
    id: string;
    name: string;
    price: number;
    ownerID: number;
    desc: string;
    img: string[];
 constructor(id: string, name: string, price: number, ownerID: number, desc: string, img: string[] ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ownerID = ownerID;
    this.desc = desc;
    this.img = img;
 }
}
