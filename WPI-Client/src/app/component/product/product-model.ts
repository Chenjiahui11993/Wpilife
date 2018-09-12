export class ProductModel {
    id: string;
    name: string;
    price: string;
    ownerID: string;
    description: string;
    imgUrl: string[];
    type: Boolean;
    contactInfo: string;
    today: string;
    constructor(name: string, price: string, ownerID: string, desc: string,
        contactInfo: string, img: string[], type: Boolean, today: string) {
        this.name = name;
        this.price = price;
        this.ownerID = ownerID;
        this.description = desc;
        this.imgUrl = img;
        this.contactInfo = contactInfo;
        this.type = type;
        this.today = today;
    }
}
