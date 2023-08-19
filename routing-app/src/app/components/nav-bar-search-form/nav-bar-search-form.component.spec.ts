import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSearchFormComponent } from './nav-bar-search-form.component';

describe('NavBarSearchFormComponent', () => {
  let component: NavBarSearchFormComponent;
  let fixture: ComponentFixture<NavBarSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
