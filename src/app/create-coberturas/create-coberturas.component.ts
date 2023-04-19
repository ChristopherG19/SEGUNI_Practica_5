import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-coberturas',
  templateUrl: './create-coberturas.component.html',
  styleUrls: ['./create-coberturas.component.css']
})
export class CreateCoberturasComponent {
  coberturaForm: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.coberturaForm = this.fb.group({
      descripcion: ['', [Validators.required, Validators.maxLength(100)]],
      costo: ['', [Validators.required, Validators.min(0)]],
      suma_asegurada: ['', [Validators.required, Validators.min(0)]],
      estado: ['E', [Validators.required, Validators.maxLength(1)]],
      grabacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      grabacion_fecha: ['', Validators.required],
      modificacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      modificacion_fecha: ['', Validators.required]
    });
  }

}
