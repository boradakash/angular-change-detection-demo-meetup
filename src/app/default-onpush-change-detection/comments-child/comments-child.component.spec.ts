import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsChildComponent } from './comments-child.component';

describe('CommentsChildComponent', () => {
  let component: CommentsChildComponent;
  let fixture: ComponentFixture<CommentsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
