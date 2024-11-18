import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BudgetOverviewComponent } from "./sections/budget-overview/budget-overview.component";
import { NewsHeaderSlideshowComponent } from './sections/news-header-slideshow/news-header-slideshow.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BudgetOverviewComponent,
    NewsHeaderSlideshowComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
