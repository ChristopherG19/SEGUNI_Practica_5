import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePolizasComponent } from './create-polizas.component';

describe('CreatePolizasComponent', () => {
  let component: CreatePolizasComponent;
  let fixture: ComponentFixture<CreatePolizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePolizasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
