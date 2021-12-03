import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauveteursComponent } from './sauveteurs.component';

describe('SauveteursComponent', () => {
  let component: SauveteursComponent;
  let fixture: ComponentFixture<SauveteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauveteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauveteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
