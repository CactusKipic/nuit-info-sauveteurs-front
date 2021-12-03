import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauvesComponent } from './sauves.component';

describe('SauvesComponent', () => {
  let component: SauvesComponent;
  let fixture: ComponentFixture<SauvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
