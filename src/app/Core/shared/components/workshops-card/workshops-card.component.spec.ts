import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsCardComponent } from './workshops-card.component';

describe('WorkshopsCardComponent', () => {
  let component: WorkshopsCardComponent;
  let fixture: ComponentFixture<WorkshopsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
