import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnarticlesComponent } from './ownarticles.component';

describe('OwnarticlesComponent', () => {
  let component: OwnarticlesComponent;
  let fixture: ComponentFixture<OwnarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnarticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
