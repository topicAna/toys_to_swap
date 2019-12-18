import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCreationComponent } from './exchange-creation.component';

describe('ExchangeCreationComponent', () => {
  let component: ExchangeCreationComponent;
  let fixture: ComponentFixture<ExchangeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
