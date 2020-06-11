import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCurrencyBoxComponent } from './single-currency-box.component';

describe('SingleCurrencyBoxComponent', () => {
  let component: SingleCurrencyBoxComponent;
  let fixture: ComponentFixture<SingleCurrencyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCurrencyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCurrencyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
