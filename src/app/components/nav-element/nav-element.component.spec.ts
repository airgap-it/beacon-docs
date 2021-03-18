import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavElementComponent } from './nav-element.component';

describe('NavElementComponent', () => {
  let component: NavElementComponent;
  let fixture: ComponentFixture<NavElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
