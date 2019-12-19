import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretSantaComponent } from './secret-santa.component';

describe('SecretSantaComponent', () => {
  let component: SecretSantaComponent;
  let fixture: ComponentFixture<SecretSantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretSantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretSantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
