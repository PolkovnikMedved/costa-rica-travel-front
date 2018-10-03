import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPartnersComponent } from './get-partners.component';

describe('GetPartnersComponent', () => {
  let component: GetPartnersComponent;
  let fixture: ComponentFixture<GetPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
