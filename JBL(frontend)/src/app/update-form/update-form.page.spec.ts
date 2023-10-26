import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateFormPage } from './update-form.page';

describe('UpdateFormPage', () => {
  let component: UpdateFormPage;
  let fixture: ComponentFixture<UpdateFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
