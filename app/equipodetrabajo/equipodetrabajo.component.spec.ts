import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipodetrabajoComponent } from './equipodetrabajo.component';

describe('EquipodetrabajoComponent', () => {
  let component: EquipodetrabajoComponent;
  let fixture: ComponentFixture<EquipodetrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipodetrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipodetrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
