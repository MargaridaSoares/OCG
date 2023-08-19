import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDropDownComponent } from './nav-bar-drop-down.component';

describe('NavBarDropDownComponent', () => {
  let component: NavBarDropDownComponent;
  let fixture: ComponentFixture<NavBarDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
