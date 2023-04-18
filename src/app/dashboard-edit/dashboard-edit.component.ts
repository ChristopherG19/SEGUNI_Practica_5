import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent {
  newUser:any;
  successToken = false;
  items: MenuItem[] = [];
  itemsTools: MenuItem[] = [];

  ngOnInit():void{
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: ['/dashboard-edit'] },
    ];

    this.itemsTools = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
    ];

    let temp:any = localStorage.getItem("user"); 
    if(temp){
      this.newUser = JSON.parse(temp);
    } else {
      this.logout()
    }

  }

  handleUpload(event:any){
    console.log(event)
  }

  logout(){
    localStorage.clear();
    location.href = "";
  }
}
