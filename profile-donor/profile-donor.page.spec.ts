import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileDonorPage } from './profile-donor.page';

describe('ProfileDonorPage', () => {
  let component: ProfileDonorPage;
  let fixture: ComponentFixture<ProfileDonorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileDonorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
