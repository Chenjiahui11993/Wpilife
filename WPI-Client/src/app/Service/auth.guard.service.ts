import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/sell']);
        return false;
      }
   }
}
