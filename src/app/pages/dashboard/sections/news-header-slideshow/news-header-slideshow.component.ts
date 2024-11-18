import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from '../../../../services/news.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-news-header-slideshow',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './news-header-slideshow.component.html',
  styleUrl: './news-header-slideshow.component.scss'
})
export class NewsHeaderSlideshowComponent implements OnInit, OnDestroy {
  newsItems: any[] = [];
  currentIndex: number = 0;
  private subscription!: Subscription;
  private intervalSubscription!: Subscription;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.subscription = this.newsService.getLatestNews().subscribe(
      (news) => {
        this.newsItems = news;
        console.log('News fetched:', news);
        this.startSlideshow();
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  startSlideshow(): void {
    if (this.newsItems.length > 1) {
      this.intervalSubscription = interval(10000).subscribe(() => {
        this.currentIndex = (this.currentIndex + 1) % this.newsItems.length;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
