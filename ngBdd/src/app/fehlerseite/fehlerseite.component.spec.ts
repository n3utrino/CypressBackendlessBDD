import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FehlerseiteComponent } from './fehlerseite.component';

describe('FehlerseiteComponent', () => {
  let component: FehlerseiteComponent;
  let fixture: ComponentFixture<FehlerseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FehlerseiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FehlerseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
