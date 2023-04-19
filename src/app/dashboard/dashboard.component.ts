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
  selectedComponent: string = '';

  ngOnInit():void{
    this.items = [    
      { 
        label: 'Clientes', icon: 'pi pi-user', items: [
          { label: 'Creación clientes', icon: 'pi pi-user-plus', command: (item) => this.changeLabel(item)},
          { label: 'Mantenimiento de clientes', icon: 'pi pi-user-edit', command: (item) => this.changeLabel(item)}
        ]
      },
      {
        label: 'Coberturas', icon: 'pi pi-book', items: [
          { label: 'Creación coberturas', icon: 'pi pi-plus', command: (item) => this.changeLabel(item)},
          { label: 'Mantenimiento de coberturas', icon: 'pi pi-pencil', command: (item) => this.changeLabel(item)}
        ]
      },
      { 
        label: 'Polizas', icon: 'pi pi-file', items: [
          { label: 'Emisión póliza', icon: 'pi pi-plus', command: (item) => this.changeLabel(item)},
          { label: 'Consulta y modificación de polizas', icon: 'pi pi-file-edit', command: (item) => this.changeLabel(item)}
        ]
      },
      { 
        label: 'Siniestros', icon: 'pi pi-exclamation-triangle', items: [
          { label: 'Ingreso de siniestros', icon: 'pi pi-plus', command: (item) => this.changeLabel(item)},
          { label: 'Consulta y modificación de siniestros por póliza', icon: 'pi pi-sliders-h', command: (item) => this.changeLabel(item)}
        ]
      },
      { 
        label: 'Facturas', icon: 'pi pi-wallet' ,items: [
          { label: 'Consulta de facturas', icon: 'pi pi-eye', command: (item) => this.changeLabel(item)},
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

  changeLabel(obj: any) {
    console.log(obj.item.label)
    this.selectedComponent = obj.item.label
  }

  logout(){
    localStorage.clear();
    location.href = "";
  }

}
