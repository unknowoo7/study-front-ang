import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFavoriteColor } from './reactive-favorite-color';

describe('ReactiveFavoriteColor', () => {
  let component: ReactiveFavoriteColor;
  let fixture: ComponentFixture<ReactiveFavoriteColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFavoriteColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFavoriteColor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
