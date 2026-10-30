import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickyListComponent } from './ricky-list-component';

describe('RickyListComponent', () => {
  let component: RickyListComponent;
  let fixture: ComponentFixture<RickyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickyListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RickyListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
