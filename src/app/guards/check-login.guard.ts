import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  canActivate(): Observable<boolean>{
    const usuario = localStorage.getItem('user');
    if(usuario){
      const newUser = JSON.parse(usuario);
      if(newUser.token){
        return of(true);
      } else {
        return of(false);
      }
    } else {
      location.href = "";
      return of(false);
    }
  }

}
