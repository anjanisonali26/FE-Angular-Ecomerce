import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../shared/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean>|boolean{
      if(this.authService.loginsave !== true){
        Swal.fire({
          title: "Login Success",
          text: "Mantap, sudah register. Silahkan Login",
          icon:"success",
      })
      this.router.navigate([''])
      }
      return true
    }
  
}
