import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstQuarterComponent } from './first-quarter.component';

describe('FirstQuarterComponent', () => {
  let component: FirstQuarterComponent;
  let fixture: ComponentFixture<FirstQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstQuarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
