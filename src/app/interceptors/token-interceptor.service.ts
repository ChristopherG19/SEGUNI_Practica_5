import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  newUser:any;
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    const usuario = localStorage.getItem('user');
    if(usuario){
      this.newUser = JSON.parse(usuario);
      let token = 'Bearer '+this.newUser.token
      const cloneAuth = req.clone({ headers: req.headers.set('Authorization', token)});
      return next.handle( cloneAuth );
    }
    return next.handle( req );
  }
}
