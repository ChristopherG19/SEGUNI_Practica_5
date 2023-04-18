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
  activeIndex: number = 0;
  items: MenuItem[] = [];

  ngOnInit():void{
    this.items = [    
      { 
        label: 'Clientes', icon: 'pi pi-user', items: [
          { label: 'Creación clientes', routerLink: '/creacion-clientes', icon: 'pi pi-user-plus'},
          { label: 'Mantenimiento de clientes', routerLink: '/mantenimiento-clientes', icon: 'pi pi-user-edit'}
        ]
      },
      {
        label: 'Coberturas', icon: 'pi pi-book', items: [
          { label: 'Creación coberturas', routerLink: '/creacion-coberturas', icon: 'pi pi-plus'},
          { label: 'Mantenimiento de coberturas', routerLink: '/mantenimiento-coberturas', icon: 'pi pi-pencil'}
        ]
      },
      { 
        label: 'Polizas', icon: 'pi pi-file', items: [
          { label: 'Emisión póliza', routerLink: '/emision-poliza', icon: 'pi pi-plus'},
          { label: 'Consulta y modificación de polizas', routerLink: '/consulta-modificacion-polizas', icon: 'pi pi-file-edit'}
        ]
      },
      { 
        label: 'Siniestros', icon: 'pi pi-exclamation-triangle', items: [
          { label: 'Ingreso de siniestros', routerLink: '/ingreso-siniestros', icon: 'pi pi-plus'},
          { label: 'Consulta y modificación de siniestros por póliza', routerLink: '/consulta-modificacion-siniestros', icon: 'pi pi-sliders-h'}
        ]
      },
      { 
        label: 'Facturas', icon: 'pi pi-wallet' ,items: [
          { label: 'Consulta de facturas', routerLink: '/consulta-facturas', icon: 'pi pi-eye'},
        ] 
      }
  ];
    let temp:any = localStorage.getItem("user"); 
    if(temp){
      this.newUser = JSON.parse(temp);
    } else {
      this.logout()
    }

  }

  onChange(event:any) {
    this.activeIndex = event.index;
  }

  obtenerClientes(){
    this.successToken = !this.successToken;
  }

  logout(){
    localStorage.clear();
    location.href = "";
  }

}
