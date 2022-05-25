import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authservice: AuthentificationService,
    private route: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authservice.isAuthValid == true) {
      return true;
    } else {
      return this.route.navigate(['/auth']);
    }
  }
}
