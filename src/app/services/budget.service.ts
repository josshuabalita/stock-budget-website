import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budget : Budget = {
    income: 11568.78,
    expenses: 5234.26,
    balance: 0, 
  }

  constructor() {
    this.budget.balance = this.calculateBalance(this.budget.income, this.budget.expenses);
   }

  getBudget(): Budget {
    return this.budget;
  }

  updateBudget(income: number, expenses: number): Budget {
    this.budget.income = income;
    this.budget.expenses = expenses;
    this.budget.balance = this.calculateBalance(income, expenses);
    return this.budget;
  }

  private calculateBalance(income: number, expenses: number): number {
    return income - expenses;
  }
}
