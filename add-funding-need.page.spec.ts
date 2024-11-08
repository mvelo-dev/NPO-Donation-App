import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFundingNeedPage } from './add-funding-need.page';

describe('AddFundingNeedPage', () => {
  let component: AddFundingNeedPage;
  let fixture: ComponentFixture<AddFundingNeedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddFundingNeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
