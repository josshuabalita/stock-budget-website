import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Budget } from '../../../../models/budget.model';
import { BudgetService } from '../../../../services/budget.service';
import { CurrenyFormatDirective } from '../../../../directives/curreny-format.directive';
import { NgIf } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-budget-overview',
  standalone: true,
  imports: [
    CurrenyFormatDirective,
    NgIf,
  ],
  templateUrl: './budget-overview.component.html',
  styleUrl: './budget-overview.component.scss'
})

export class BudgetOverviewComponent implements OnInit, AfterViewInit{
  budget!: Budget;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budget = this.budgetService.getBudget();
  }

  ngAfterViewInit(): void {
    if (this.budget) {
      new Chart('budgetPieChart', {
        type: 'pie',
        data: {
          labels: ['Income', 'Expenses', 'Balance'],
          datasets: [{
            data: [this.budget.income, this.budget.expenses, this.budget.balance],
            backgroundColor: ['#38A169', '#E53E3E', '#D69E2E'],
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }
  }
}
