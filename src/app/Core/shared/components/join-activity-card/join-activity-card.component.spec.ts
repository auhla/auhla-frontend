import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinActivityCardComponent } from './join-activity-card.component';

describe('JoinActivityCardComponent', () => {
  let component: JoinActivityCardComponent;
  let fixture: ComponentFixture<JoinActivityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinActivityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
