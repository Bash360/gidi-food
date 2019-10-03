import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantCardComponent } from './restuarant-card.component';

describe('RestuarantCardComponent', () => {
  let component: RestuarantCardComponent;
  let fixture: ComponentFixture<RestuarantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestuarantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
