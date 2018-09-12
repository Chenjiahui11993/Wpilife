export class DemandModel {
 name: string;
 contactInfo: string;
 description: string;
 ownerID: string;
 type: Boolean;
 today: string;
 constructor(name: string, contactInfo: string, desc: string, ownerID: string, type: Boolean, today: string) {
  this.name = name;
  this.contactInfo = contactInfo;
  this.description = desc;
  this.ownerID = ownerID;
  this.type = type;
  this.today = today;
 }
}
