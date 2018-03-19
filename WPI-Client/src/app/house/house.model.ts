export class HouseModel {
id: number;
Address: string;
description: string;
img: string[];
price: number;
date: string;
ownerinfo: string;
type: string;
contactInfo: string;
constructor( Address: string, desc: string, price: number, ownerinfo: string, contactInfo: string) {
    this.Address = Address;
    this.description = desc;
    this.price = price;
    this.ownerinfo = ownerinfo;
    this.contactInfo = contactInfo;
}
}
