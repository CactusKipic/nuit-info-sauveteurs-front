import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauveComponent } from './sauve.component';

describe('SauveComponent', () => {
  let component: SauveComponent;
  let fixture: ComponentFixture<SauveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
