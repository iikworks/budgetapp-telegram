import { Account } from "./types/account";
import { Category } from "./types/category";
import { Transaction } from "./types/transaction";

const currency = 'BYN';
const categories: Category[] = [
  {
    id: 1,
    type: 'income',
    title: 'Зарплата',
    amount_per_period: 200,
  }, {
    id: 2,
    type: 'income',
    title: 'Кэшбек',
    amount_per_period: 3.32,
  }, {
    id: 3,
    type: 'expense',
    title: 'Квартира',
    amount_per_period: 0,
  }, {
    id: 4,
    type: 'expense',
    title: 'ЖКУ',
    amount_per_period: 233,
  }, {
    id: 5,
    type: 'expense',
    title: 'Здоровье',
    amount_per_period: 15.51,
  }, {
    id: 6,
    type: 'income',
    title: 'Продажа',
    amount_per_period: 3466,
  },
];

const accounts: Account[] = [
  {
    id: 1,
    balance: 230,
    title: 'Карта Visa',
    currency: 'BYN',
    created_at: '2023-12-24T15:23:00Z',
  }, {
    id: 2,
    balance: 233.1,
    title: 'Счёт USD',
    currency: 'USD',
    created_at: '2024-01-01T10:57:00Z',
  }
];

const transactions: Transaction[] = [
  {
    id: 1,
    account: accounts[0],
    transfer: null,
    category: categories[2],
    amount: 223.20,
    date: new Date(),
  }, {
    id: 2,
    account: accounts[1],
    transfer: null,
    category: categories[0],
    amount: 50000.00,
    date: new Date(),
  }
];

export {
  currency,
  categories,
  accounts,
  transactions,
};
