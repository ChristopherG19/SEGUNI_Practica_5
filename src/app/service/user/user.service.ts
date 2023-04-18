import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(newUser:any){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>("/api/noauth/login", newUser, httpOptions).pipe(
      catchError(e=>"e"),
      map((response: HttpResponse<any>) => response)
    );
  }

  getClientes(page:any, limit:any){
    return this.http.get(`/api/auth/clientes/find/${page}/${limit}`).pipe(
      catchError((e) => 'e ')
    )
  }

  saveClientes(cliente:any){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<any>("/api/auth/clientes/guardar", cliente, httpOptions).pipe(
      catchError(e=>"e"),
      map((response: HttpResponse<any>) => response)
    );
  }
}
