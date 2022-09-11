import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobStatusByPmComponent } from './update-job-status-by-pm.component';

describe('UpdateJobStatusByPmComponent', () => {
  let component: UpdateJobStatusByPmComponent;
  let fixture: ComponentFixture<UpdateJobStatusByPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJobStatusByPmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateJobStatusByPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
