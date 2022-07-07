import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2NewsletterComponent } from './demo2-newsletter.component';

describe('Demo2NewsletterComponent', () => {
  let component: Demo2NewsletterComponent;
  let fixture: ComponentFixture<Demo2NewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo2NewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo2NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
