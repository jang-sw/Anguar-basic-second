import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDiplayComponent } from './time-diplay.component';

describe('TimeDiplayComponent', () => {
  let component: TimeDiplayComponent;
  let fixture: ComponentFixture<TimeDiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeDiplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
