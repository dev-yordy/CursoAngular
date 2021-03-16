import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulodetalleComponent } from './articulodetalle.component';

describe('ArticulodetalleComponent', () => {
  let component: ArticulodetalleComponent;
  let fixture: ComponentFixture<ArticulodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulodetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
