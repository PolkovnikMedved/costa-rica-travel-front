import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTypesComponent } from './get-types.component';

describe('GetTypesComponent', () => {
  let component: GetTypesComponent;
  let fixture: ComponentFixture<GetTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
