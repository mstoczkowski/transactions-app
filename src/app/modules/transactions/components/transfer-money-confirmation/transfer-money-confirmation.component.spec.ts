import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMoneyConfirmationComponent } from './transfer-money-confirmation.component';

describe('TransferMoneyConfirmationComponent', () => {
  let component: TransferMoneyConfirmationComponent;
  let fixture: ComponentFixture<TransferMoneyConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferMoneyConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMoneyConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
