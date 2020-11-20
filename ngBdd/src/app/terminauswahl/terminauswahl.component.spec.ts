import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminauswahlComponent } from './terminauswahl.component';

describe('TerminauswahlComponent', () => {
  let component: TerminauswahlComponent;
  let fixture: ComponentFixture<TerminauswahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminauswahlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminauswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
