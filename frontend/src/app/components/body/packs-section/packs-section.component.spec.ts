import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksSectionComponent } from './packs-section.component';

describe('PacksSectionComponent', () => {
  let component: PacksSectionComponent;
  let fixture: ComponentFixture<PacksSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
