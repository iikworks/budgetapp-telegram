import { Account } from "./account";
import { Category } from "./category";

export type Transaction = {
  id: number;
  account: Account;
  transfer: Transaction | null;
  category: Category | null;
  amount: number;
  date: Date;
};
