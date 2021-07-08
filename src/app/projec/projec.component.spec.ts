import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecComponent } from './projec.component';

describe('ProjecComponent', () => {
  let component: ProjecComponent;
  let fixture: ComponentFixture<ProjecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
