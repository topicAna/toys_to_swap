import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape3Component } from './etape3.component';

describe('Etape3Component', () => {
  let component: Etape3Component;
  let fixture: ComponentFixture<Etape3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etape3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
