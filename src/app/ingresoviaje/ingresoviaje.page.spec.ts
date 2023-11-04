import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoviajePage } from './ingresoviaje.page';

describe('IngresoviajePage', () => {
  let component: IngresoviajePage;
  let fixture: ComponentFixture<IngresoviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
