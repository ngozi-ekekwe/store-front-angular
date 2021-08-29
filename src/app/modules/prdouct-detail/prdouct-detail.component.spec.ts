import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdouctDetailComponent } from './prdouct-detail.component';

describe('PrdouctDetailComponent', () => {
  let component: PrdouctDetailComponent;
  let fixture: ComponentFixture<PrdouctDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdouctDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdouctDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
