import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondQuarterComponent } from './second-quarter.component';

describe('SecondQuarterComponent', () => {
  let component: SecondQuarterComponent;
  let fixture: ComponentFixture<SecondQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondQuarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
