import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleCellRendererComponent } from './user-role-cell-renderer.component';

describe('UserRoleCellRendererComponent', () => {
  let component: UserRoleCellRendererComponent;
  let fixture: ComponentFixture<UserRoleCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoleCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
