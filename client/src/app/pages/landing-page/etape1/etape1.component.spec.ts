import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape1Component } from './etape1.component';

describe('Etape1Component', () => {
  let component: Etape1Component;
  let fixture: ComponentFixture<Etape1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etape1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
