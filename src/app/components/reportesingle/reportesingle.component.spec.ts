import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesingleComponent } from './reportesingle.component';

describe('ReportesingleComponent', () => {
  let component: ReportesingleComponent;
  let fixture: ComponentFixture<ReportesingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
