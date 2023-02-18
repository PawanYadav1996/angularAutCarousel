import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCarouselViewComponent } from './auto-carousel-view.component';

describe('AutoCarouselViewComponent', () => {
  let component: AutoCarouselViewComponent;
  let fixture: ComponentFixture<AutoCarouselViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCarouselViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCarouselViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
