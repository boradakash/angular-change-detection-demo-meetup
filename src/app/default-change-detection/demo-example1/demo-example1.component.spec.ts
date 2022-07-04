import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExample1Component } from './demo-example1.component';

describe('DemoExample1Component', () => {
  let component: DemoExample1Component;
  let fixture: ComponentFixture<DemoExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
