import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payinquire',
  templateUrl: './payinquire.component.html',
  styleUrls: [
    './resources/css/style.css',
    './vendors/css/normalize.css',
    './vendors/css/grid.css',
    './vendors/css/ionicons.min.css',
    './vendors/css/animate.css',
    './resources/css/queries.css'
  ]
})
export class PayinquireComponent implements OnInit {
status :boolean;
  constructor() { 
    this.status = false;
  }

  ngOnInit() {
  }
  getInfo() {
    this.status = true;
  }

}
