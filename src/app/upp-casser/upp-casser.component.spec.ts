import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppCasserComponent } from './upp-casser.component';

describe('UppCasserComponent', () => {
  let component: UppCasserComponent;
  let fixture: ComponentFixture<UppCasserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppCasserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppCasserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
