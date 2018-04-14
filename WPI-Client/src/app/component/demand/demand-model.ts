export class DemandModel {
 name: string;
 contactInfo: string;
 description: string;
 ownerID: string;
 type: Boolean;
 constructor(name: string, contactInfo: string, desc: string, ownerID: string, type: Boolean) {
  this.name = name;
  this.contactInfo = contactInfo;
  this.description = desc;
  this.ownerID = ownerID;
  this.type = type;
 }
}
