import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent {
  clienteForm: FormGroup | any;
  direcciones: any[] = [];
  direccionForm: FormGroup | any;
  direccionCount = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      nit: ['', [Validators.required, Validators.maxLength(20)]],
      dpi: ['', [Validators.required, Validators.maxLength(20)]],
      estado: ['E', [Validators.required, Validators.maxLength(1)]],
      grabacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      grabacion_fecha: ['', Validators.required],
      modificacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      modificacion_fecha: ['', Validators.required]
    });

    this.direccionForm = this.fb.group({
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      estado: ['E', [Validators.required, Validators.maxLength(1)]],
      grabacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      grabacion_fecha: ['', Validators.required],
      modificacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      modificacion_fecha: ['', Validators.required]
    });
  }

  agregarDireccion() {
    this.direccionCount++;
    this.direcciones.push({
      id: this.direccionCount,
      direccion: this.direccionForm.controls['direccion'].value,
      estado: this.direccionForm.controls['estado'].value,
      grabacion_usuario: this.direccionForm.controls['grabacion_usuario'].value,
      grabacion_fecha: this.direccionForm.controls['grabacion_fecha'].value,
      modificacion_usuario: this.direccionForm.controls['modificacion_usuario'].value,
      modificacion_fecha: this.direccionForm.controls['modificacion_fecha'].value
    });
    this.direccionForm.reset();
  }

  eliminarDireccion(direccion:any) {
    const index = this.direcciones.indexOf(direccion);
    this.direcciones.splice(index, 1);
    this.direccionCount--;
  }

}
