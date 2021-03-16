import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulodetallesComponent } from './articulodetalles.component';

describe('ArticulodetallesComponent', () => {
  let component: ArticulodetallesComponent;
  let fixture: ComponentFixture<ArticulodetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulodetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulodetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
