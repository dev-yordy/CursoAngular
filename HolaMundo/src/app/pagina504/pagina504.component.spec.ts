import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina504Component } from './pagina504.component';

describe('Pagina504Component', () => {
  let component: Pagina504Component;
  let fixture: ComponentFixture<Pagina504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina504Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
