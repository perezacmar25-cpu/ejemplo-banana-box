import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickyModal } from './ricky-modal';

describe('RickyModal', () => {
  let component: RickyModal;
  let fixture: ComponentFixture<RickyModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickyModal],
    }).compileComponents();

    fixture = TestBed.createComponent(RickyModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
