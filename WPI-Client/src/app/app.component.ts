import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { AuthService } from './Service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth: AuthService) {
    PageScrollConfig.defaultDuration = 500;
    auth.handleAuthentication();
  }
}
