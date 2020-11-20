import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialsucheComponent } from './filialsuche.component';

describe('FilialsucheComponent', () => {
  let component: FilialsucheComponent;
  let fixture: ComponentFixture<FilialsucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilialsucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialsucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
