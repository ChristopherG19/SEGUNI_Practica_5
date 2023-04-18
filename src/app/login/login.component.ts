import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newUser = {username:null, password:null};
  invalidUser = false;

  constructor(private userService:UserService) { }

  login(){
    let form:any = document.getElementById("formLogin");
    let validForm = form.reportValidity();
    if(validForm){
      this.userService.login(this.newUser).subscribe(
        (response:any) => this.loginProcess(response)
      )
    }
  }

  loginProcess(newUser:any){
    if(newUser.token){
      localStorage.setItem("user", JSON.stringify(newUser));
      location.href = "/dashboard";
    } else {
      this.invalidUser = true;
    }
  }

}
