export class HouseModel {
id: number;
Address: string;
description: string;
img: string[];
price: number;
date: string;
ownerinfo: string;
type: string;
constructor(id: number, Address: string, desc: string, img: string[], price: number, data: string, ownerinfo: string, type: string) {
    this.id = id;
    this.Address = Address;
    this.description = desc;
    this.img = img;
    this.price = price;
    this.date = data;
    this.ownerinfo = ownerinfo;
    this.type = type;
}
}
