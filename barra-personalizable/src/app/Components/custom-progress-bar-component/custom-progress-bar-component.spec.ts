import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomProgressBarComponent } from './custom-progress-bar-component';

describe('CustomProgressBarComponent', () => {
  let component: CustomProgressBarComponent;
  let fixture: ComponentFixture<CustomProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProgressBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
