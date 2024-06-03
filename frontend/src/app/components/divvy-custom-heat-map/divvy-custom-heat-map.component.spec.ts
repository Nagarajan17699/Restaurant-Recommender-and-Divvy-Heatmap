import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivvyCustomHeatMapComponent } from './divvy-custom-heat-map.component';

describe('DivvyCustomHeatMapComponent', () => {
  let component: DivvyCustomHeatMapComponent;
  let fixture: ComponentFixture<DivvyCustomHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivvyCustomHeatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivvyCustomHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
