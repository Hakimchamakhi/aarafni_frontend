import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamregisterComponent } from './teamregister.component';

describe('TeamregisterComponent', () => {
  let component: TeamregisterComponent;
  let fixture: ComponentFixture<TeamregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
