import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPartnerComponent } from './get-partner.component';

describe('GetPartnerComponent', () => {
  let component: GetPartnerComponent;
  let fixture: ComponentFixture<GetPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
