import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadsetsFormPage } from './headsets-form.page';

describe('HeadsetsFormPage', () => {
  let component: HeadsetsFormPage;
  let fixture: ComponentFixture<HeadsetsFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeadsetsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
