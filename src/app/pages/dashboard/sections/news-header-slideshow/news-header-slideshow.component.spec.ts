import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeaderSlideshowComponent } from './news-header-slideshow.component';

describe('NewsHeaderSlideshowComponent', () => {
  let component: NewsHeaderSlideshowComponent;
  let fixture: ComponentFixture<NewsHeaderSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsHeaderSlideshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsHeaderSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
