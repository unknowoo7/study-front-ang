import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorForm } from './actor-form';

describe('ActorForm', () => {
  let component: ActorForm;
  let fixture: ComponentFixture<ActorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
