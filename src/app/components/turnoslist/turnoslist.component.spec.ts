import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoslistComponent } from './turnoslist.component';

describe('TurnoslistComponent', () => {
  let component: TurnoslistComponent;
  let fixture: ComponentFixture<TurnoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnoslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
