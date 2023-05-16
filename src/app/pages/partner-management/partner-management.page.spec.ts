import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerManagementPage } from './partner-management.page';

describe('PartnerManagementPage', () => {
  let component: PartnerManagementPage;
  let fixture: ComponentFixture<PartnerManagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartnerManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

