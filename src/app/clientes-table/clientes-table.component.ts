import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.css']
})
export class ClientesTableComponent {
  token:any;
  datos:any;
  currentPage: number = 0;
  rowsPerPage: number = 15;
  totalRecords: number = 0;
  first: any;
  last: any;

  constructor(private userService:UserService) { }

  ngOnInit():void{
    this.getClientes();
  }

  getClientes():void {
    this.userService.getClientes(this.currentPage, this.rowsPerPage).subscribe(
      (response:any) =>  {
        this.datos = response.content,
        this.first = response.first,
        this.last = response.last,
        this.totalRecords = response.totalElements
      },
      error => {
        console.log(error);
      }
    );
  }

  onPageChange(event: any){
    this.rowsPerPage = event.rows
    let page:number = event.first/this.rowsPerPage
    if(this.currentPage != page){
      this.currentPage = Math.round(page)
      this.getClientes()
    }
  }
}
