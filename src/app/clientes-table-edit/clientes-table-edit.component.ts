import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { MessageService } from 'primeng/api';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-clientes-table-edit',
  templateUrl: './clientes-table-edit.component.html',
  styleUrls: ['./clientes-table-edit.component.css'],
  providers: [MessageService]
})
export class ClientesTableEditComponent {
  token:any;
  datos:any;
  currentPage: number = 0;
  rowsPerPage: number = 15;
  clonedDatos: { [s: string]: any } = {};

  constructor(private userService:UserService, private messageService: MessageService) { }

  ReadExcel(event:any){

    let file = event.target.files[0]

    let fileReader = new FileReader()
    fileReader.readAsBinaryString(file)
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, {type:'binary'})
      var sheetNames = workBook.SheetNames

      this.datos = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
    }

  }

  UploadData(){
    
    this.datos.forEach((cliente:any) => {
      this.userService.saveClientes(cliente).subscribe(
        (response:any) =>  {
          this.datos = []
        },
        error => {
          console.log(error);
        }
      )
    });

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Datos guardados con éxito' });
  }

  onRowEditInit(dato: any){
    this.clonedDatos[dato.dpi] = { ...dato };
  }

  onRowEditSave(dato: any){
    delete this.clonedDatos[dato.dpi];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Datos actualizados' });
  }

  onRowEditCancel(dato: any, index:any){
    this.datos[index] = this.clonedDatos[dato.dpi];
    delete this.clonedDatos[dato.dpi];
  }

}
