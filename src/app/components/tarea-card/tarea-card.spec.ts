import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCardComponent } from './tarea-card';

describe('TareaCard', () => {
  let component: TareaCardComponent;
  let fixture: ComponentFixture<TareaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TareaCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
