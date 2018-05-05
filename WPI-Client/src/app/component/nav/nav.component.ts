import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  // console.log('1');
  }
  ngOnInit() {
  }

}
