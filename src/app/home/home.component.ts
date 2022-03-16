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
  constructor(expenseService: ExpenseService) {
    this._expenseService = expenseService;
  }

  expenses: IExpense[];
  currentMonthSpending = {};
  lastMonthSpending = {};

  // currentMonthSpending: MonthSpending = {
  //   amount: renderCurrency(300),
  //   month: 'July',
  // };
  // lastMonthSpending: MonthSpending = {
  //   amount: renderCurrency(300),
  //   month: 'July',
  // };
  ngOnInit() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const thisMonth = new Date();
    const lastMonth = new Date(
      thisMonth.getFullYear(),
      thisMonth.getMonth() - 1
    );
    this._expenseService.getExpenses(this.getPeriod(thisMonth)).subscribe(
      (expenses) => {
        this.expenses = expenses;
      },
      (error) => {
        console.log('Error retrieving expenses');
        console.error(error);
      }
    );
    this._expenseService
      .getTotalSpending(this.getPeriod(thisMonth))
      .subscribe((amount) => {
        this.currentMonthSpending = {
          month: months[thisMonth.getMonth()],
          amount,
        };
      });
    this._expenseService
      .getTotalSpending(this.getPeriod(lastMonth))
      .subscribe((amount) => {
        this.lastMonthSpending = {
          month: months[lastMonth.getMonth()],
          amount,
        };
      });
  }
  getPeriod(date: Date) {
    const period = date.toJSON().split('-');
    return period[0] + '-' + period[1];
  }
}
