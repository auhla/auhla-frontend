import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartActivityScreenComponent } from './start-activity-screen.component';

describe('StartActivityScreenComponent', () => {
  let component: StartActivityScreenComponent;
  let fixture: ComponentFixture<StartActivityScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartActivityScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartActivityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
