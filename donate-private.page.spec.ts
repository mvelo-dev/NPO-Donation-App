import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonatePrivatePage } from './donate-private.page';

describe('DonatePrivatePage', () => {
  let component: DonatePrivatePage;
  let fixture: ComponentFixture<DonatePrivatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonatePrivatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
