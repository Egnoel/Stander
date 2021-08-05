import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugadoComponent } from './alugado.component';

describe('AlugadoComponent', () => {
  let component: AlugadoComponent;
  let fixture: ComponentFixture<AlugadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlugadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlugadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
