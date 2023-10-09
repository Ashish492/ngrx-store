import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnersComponent } from './loading-spinners.component';

describe('LoadingSpinnersComponent', () => {
  let component: LoadingSpinnersComponent;
  let fixture: ComponentFixture<LoadingSpinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingSpinnersComponent]
    });
    fixture = TestBed.createComponent(LoadingSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
