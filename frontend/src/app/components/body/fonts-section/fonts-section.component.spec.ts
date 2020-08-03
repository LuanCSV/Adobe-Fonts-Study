import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsSectionComponent } from './fonts-section.component';

describe('FontsSectionComponent', () => {
  let component: FontsSectionComponent;
  let fixture: ComponentFixture<FontsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
