import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationsPage } from './applications.page';

describe('ApplicationsPage', () => {
  let component: ApplicationsPage;
  let fixture: ComponentFixture<ApplicationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
