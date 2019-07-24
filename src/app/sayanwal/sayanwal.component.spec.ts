import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayanwalComponent } from './sayanwal.component';

describe('SayanwalComponent', () => {
  let component: SayanwalComponent;
  let fixture: ComponentFixture<SayanwalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayanwalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayanwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
