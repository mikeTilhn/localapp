import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthQuarterComponent } from './fourth-quarter.component';

describe('FourthQuarterComponent', () => {
  let component: FourthQuarterComponent;
  let fixture: ComponentFixture<FourthQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourthQuarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
