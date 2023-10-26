import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSalesPage } from './form-sales.page';

describe('FormSalesPage', () => {
  let component: FormSalesPage;
  let fixture: ComponentFixture<FormSalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
