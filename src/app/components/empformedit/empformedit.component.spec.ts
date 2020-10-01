import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpformeditComponent } from './empformedit.component';

describe('EmpformeditComponent', () => {
  let component: EmpformeditComponent;
  let fixture: ComponentFixture<EmpformeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpformeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpformeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
