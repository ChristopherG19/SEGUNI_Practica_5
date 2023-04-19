import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoberturasComponent } from './create-coberturas.component';

describe('CreateCoberturasComponent', () => {
  let component: CreateCoberturasComponent;
  let fixture: ComponentFixture<CreateCoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoberturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
