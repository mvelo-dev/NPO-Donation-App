import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAccPage } from './create-acc.page';

describe('CreateAccPage', () => {
  let component: CreateAccPage;
  let fixture: ComponentFixture<CreateAccPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
