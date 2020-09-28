import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoformComponent } from './empleadoform.component';

describe('EmpleadoformComponent', () => {
  let component: EmpleadoformComponent;
  let fixture: ComponentFixture<EmpleadoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
