export type Category = {
  id: number;
  type: 'income' | 'expense';
  title: string;
  amount_per_period: number;
};
