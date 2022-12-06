import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBackendComponent } from './message-backend.component';

describe('MessageBackendComponent', () => {
  let component: MessageBackendComponent;
  let fixture: ComponentFixture<MessageBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
