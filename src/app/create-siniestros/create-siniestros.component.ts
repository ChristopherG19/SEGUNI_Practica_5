import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-siniestros',
  templateUrl: './create-siniestros.component.html',
  styleUrls: ['./create-siniestros.component.css']
})
export class CreateSiniestrosComponent {

  siniestroForm: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.siniestroForm = this.fb.group({
      certificado_id: ['', [Validators.required, Validators.min(0)]],
      fecha_ocurrencia: ['', Validators.required],
      solucion: ['', [Validators.required, Validators.maxLength(100)]],
      estado: ['', [Validators.required, Validators.maxLength(1)]],
      grabacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      grabacion_fecha: ['', Validators.required],
      modificacion_usuario: ['', [Validators.required, Validators.maxLength(20)]],
      modificacion_fecha: ['', Validators.required]
    });
  }

}
