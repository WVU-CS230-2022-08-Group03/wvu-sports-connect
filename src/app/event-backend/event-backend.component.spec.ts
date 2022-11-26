import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBackendComponent } from './event-backend.component';

describe('EventBackendComponent', () => {
  let component: EventBackendComponent;
  let fixture: ComponentFixture<EventBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
