import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdQuarterComponent } from './third-quarter.component';

describe('ThirdQuarterComponent', () => {
  let component: ThirdQuarterComponent;
  let fixture: ComponentFixture<ThirdQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdQuarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
