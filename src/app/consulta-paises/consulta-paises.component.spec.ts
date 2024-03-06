import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPaisesComponent } from './consulta-paises.component';

describe('ConsultaPaisesComponent', () => {
  let component: ConsultaPaisesComponent;
  let fixture: ComponentFixture<ConsultaPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaPaisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
