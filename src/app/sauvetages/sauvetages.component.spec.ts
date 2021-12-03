import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauvetagesComponent } from './sauvetages.component';

describe('SauvetagesComponent', () => {
  let component: SauvetagesComponent;
  let fixture: ComponentFixture<SauvetagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauvetagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauvetagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
