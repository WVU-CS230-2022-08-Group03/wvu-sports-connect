import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventContentsComponent } from './event-contents.component';

describe('EventContentsComponent', () => {
  let component: EventContentsComponent;
  let fixture: ComponentFixture<EventContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
