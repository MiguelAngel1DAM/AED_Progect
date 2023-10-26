import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadsetsPage } from './headsets.page';

describe('HeadsetsPage', () => {
  let component: HeadsetsPage;
  let fixture: ComponentFixture<HeadsetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeadsetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
