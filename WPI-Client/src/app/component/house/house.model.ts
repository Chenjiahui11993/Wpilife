export class HouseModel {
    id: number;
    Address: string;
    description: string;
    imgUrl: string[];
    price: string;
    fromDate: string;
    toDate: string;
    ownerID: string;
    type: Boolean;
    contactInfo: string;
    constructor(Address: string, price: string, ownerID: string, desc: string,
        contactInfo: string, img: string[], type: Boolean, fromDate: string, toDate: string) {
        this.Address = Address;
        this.price = price;
        this.description = desc;
        this.ownerID = ownerID;
        this.contactInfo = contactInfo;
        this.imgUrl = img;
        this.type = type;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}
