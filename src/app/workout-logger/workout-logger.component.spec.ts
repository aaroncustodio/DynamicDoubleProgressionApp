import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLoggerComponent } from './workout-logger.component';

describe('WorkoutLoggerComponent', () => {
  let component: WorkoutLoggerComponent;
  let fixture: ComponentFixture<WorkoutLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
