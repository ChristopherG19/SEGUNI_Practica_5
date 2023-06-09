import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditComponent } from './dashboard-edit.component';

describe('DashboardEditComponent', () => {
  let component: DashboardEditComponent;
  let fixture: ComponentFixture<DashboardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
