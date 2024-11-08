import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseAdminPage } from './choose-admin.page';

describe('ChooseAdminPage', () => {
  let component: ChooseAdminPage;
  let fixture: ComponentFixture<ChooseAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChooseAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
