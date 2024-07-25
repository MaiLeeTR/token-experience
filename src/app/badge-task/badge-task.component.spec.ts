import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTaskComponent } from './badge-task.component';

describe('BadgeTaskComponent', () => {
  let component: BadgeTaskComponent;
  let fixture: ComponentFixture<BadgeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
