import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  newUser:any;
  successToken = false;
  items: MenuItem[] = [];

  ngOnInit():void{
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: ['/dashboard-edit'] },
    ];
    let temp:any = localStorage.getItem("user"); 
    if(temp){
      this.newUser = JSON.parse(temp);
    } else {
      this.logout()
    }

  }

  obtenerClientes(){
    this.successToken = !this.successToken;
  }

  logout(){
    localStorage.clear();
    location.href = "";
  }

}
