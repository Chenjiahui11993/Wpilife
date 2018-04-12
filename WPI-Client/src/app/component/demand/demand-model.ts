export class DemandModel {
 name: string;
 contactInfo: string;
 description: string;
 constructor(name: string, contactInfo: string, desc: string) {
  this.name = name;
  this.contactInfo = contactInfo;
  this.description = desc;
 }
}
