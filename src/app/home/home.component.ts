import { Component, OnInit } from '@angular/core';
import * as currency from 'currency.js';
import { ExpenseService } from '../expenses/expense.service';
import MonthSpending from '../expenses/briefling-cards';
import IExpense from '../expenses/expense';

function renderCurrency(amount: number) {
  return currency(300, {
    fromCents: true,
    pattern: `# !`,
    symbol: '€',
    decimal: ',',
    separator: '.',
  }).format();
}

@Component({
  selector: 'et-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private _expenseService: ExpenseService;
  constructor() {
    this._expenseService = new ExpenseService();
    this.expenses = this._expenseService.getExpenses();
  }

  expenses: IExpense[];
  currentMonthSpending: MonthSpending = {
    amount: renderCurrency(300),
    month: 'July',
  };
  lastMonthSpending: MonthSpending = {
    amount: renderCurrency(300),
    month: 'July',
  };
  ngOnInit() {}
}
