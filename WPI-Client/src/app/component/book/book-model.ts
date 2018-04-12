export class BookModel {
  id: number;
  name: string;
  department: string;
  ownerID: string;
  price: string;
  date: string;
  contactInfo: string;
  imgUrl: string[];
  type: Boolean;
  description: string;
  constructor(name: string, price: string, ownerID: string, desc: string,
    contactInfo: string, img: string[], department: string, type: Boolean) {
this.name = name;
this.department = department;
this.ownerID = ownerID;
this.price = price;
this.contactInfo = contactInfo;
this.description = desc;
this.imgUrl = img;
this.type = type;
}
}
