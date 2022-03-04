import { Component, OnInit } from '@angular/core';
import * as currency from 'currency.js';
import MonthSpending from '../expenses/briefling-cards';
import IExpense from '../expenses/expense';

function renderCurrency(amount: number) {
  return(
    currency(300, {
      fromCents: true,
      pattern: `# !`,
      symbol: '€',
      decimal: ',',
      separator: '.'
  }).format()
  )
}

@Component({
  selector: 'et-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor() {}
  expenses: IExpense[] = [
    {
      description: 'First shopping for the month',
      amount: 20,
      date: '2019-08-12',
    },
    {
      description: 'Bicycle for Amy',
      amount: 10,
      date: '2019-08-08',
    },
    {
      description: 'First shopping for the month',
      amount: 14,
      date: '2019-08-21',
    },
  ];
  currentMonthSpending: MonthSpending = { amount: renderCurrency(300), month: 'July' };
  lastMonthSpending: MonthSpending= { amount: renderCurrency(300), month: 'July' };
  ngOnInit() {}

}
