import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesTableEditComponent } from './clientes-table-edit.component';

describe('ClientesTableEditComponent', () => {
  let component: ClientesTableEditComponent;
  let fixture: ComponentFixture<ClientesTableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesTableEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesTableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
