import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineScreenComponent } from './timeline-screen.component';

describe('TimelineScreenComponent', () => {
  let component: TimelineScreenComponent;
  let fixture: ComponentFixture<TimelineScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
