export class HouseModel {
id: number;
Address: string;
description: string;
imgUrl: string[];
price: string;
date: string;
ownerID: string;
type: Boolean;
contactInfo: string;
constructor( Address: string, price: string, ownerID: string, desc: string, contactInfo: string, img: string[], type: Boolean) {
    this.Address = Address;
    this.price = price;
    this.description = desc;
    this.ownerID = ownerID;
    this.contactInfo = contactInfo;
    this.imgUrl = img;
    this.type = type;
}
}
