import IExpense from './expense';

export class ExpenseService {
  getExpenses(): IExpense[] {
    return [
      {
        description: 'Groceries',
        amount: 20,
        date: '2019-08-12',
      },
      {
        description: 'New Guitar',
        amount: 2489,
        date: '2022 - 11 - 03',
      },
      {
        description: 'Hula-Hoop Course',
        amount: 100,
        date: '2010 - 02 - 03',
      },
    ];
  }
}
