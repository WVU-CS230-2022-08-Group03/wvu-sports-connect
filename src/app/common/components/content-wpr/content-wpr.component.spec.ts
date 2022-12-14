import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWprComponent } from './content-wpr.component';

describe('ContentWprComponent', () => {
  let component: ContentWprComponent;
  let fixture: ComponentFixture<ContentWprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
