import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdMainComponent } from './cd-main.component';

describe('CdMainComponent', () => {
  let component: CdMainComponent;
  let fixture: ComponentFixture<CdMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
