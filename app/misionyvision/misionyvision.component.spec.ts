import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionyvisionComponent } from './misionyvision.component';

describe('MisionyvisionComponent', () => {
  let component: MisionyvisionComponent;
  let fixture: ComponentFixture<MisionyvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisionyvisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisionyvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
