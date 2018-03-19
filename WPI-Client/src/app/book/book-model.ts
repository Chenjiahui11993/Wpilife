export class BookModel {
  id: number;
  name: string;
  department: string;
  owwnerID: number;
  price: number;
  date: string;
  contactInfo: string;
  img: string[];
  type: string;
  constructor(name: string, department: string, owwnerID: number,
              price: number, contactInfo: string, img: string[]) {
     this.name = name;
     this.department = department;
     this.owwnerID = owwnerID;
     this.price = price;
     this.contactInfo = contactInfo;
     this.img = img;
  }
}
