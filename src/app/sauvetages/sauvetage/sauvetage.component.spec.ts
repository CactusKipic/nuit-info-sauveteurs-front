import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauvetageComponent } from './sauvetage.component';

describe('SauvetageComponent', () => {
  let component: SauvetageComponent;
  let fixture: ComponentFixture<SauvetageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauvetageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauvetageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
