import { Component } from '@angular/core';
import { BudgetOverviewComponent } from "./sections/budget-overview/budget-overview.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BudgetOverviewComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
