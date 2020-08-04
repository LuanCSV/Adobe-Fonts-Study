import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundriesSectionComponent } from './foundries-section.component';

describe('FoundriesSectionComponent', () => {
  let component: FoundriesSectionComponent;
  let fixture: ComponentFixture<FoundriesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundriesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
