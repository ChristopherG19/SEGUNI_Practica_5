import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiniestrosComponent } from './create-siniestros.component';

describe('CreateSiniestrosComponent', () => {
  let component: CreateSiniestrosComponent;
  let fixture: ComponentFixture<CreateSiniestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSiniestrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSiniestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
