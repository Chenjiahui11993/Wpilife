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
  constructor(id: number, name: string, department: string, owwnerID: number,
              price: number, date: string, contactInfo: string, img: string[], type: string) {
     this.id = id;
     this.name = name;
     this.department = department;
     this.owwnerID = owwnerID;
     this.price = price;
     this.date =  date;
     this.contactInfo = contactInfo;
     this.img = img;
     this.type = type;
  }
}
