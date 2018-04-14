import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['../product/product.component.css',
    '../sell/sell.component.css']
})
export class PickUpComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
