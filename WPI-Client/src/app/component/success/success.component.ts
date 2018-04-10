import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['../product/product.component.css',
               './success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 }
