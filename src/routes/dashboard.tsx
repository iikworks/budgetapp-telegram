import DefaultLink from "../components/links/default-link";
import Header from "../components/headers/header";
import TransactionBox from "../components/transactions/transaction-box";
import AccountBox from "../components/accounts/account-box";
import HorizontalList from "../components/lists/horizontal-list";
import VerticalList from "../components/lists/vertical-list";
import CategoryBox from "../components/categories/category-box";
import { accounts, categories, currency, transactions } from "../data";

export default function DashboardPage() {
  return <>
    <section>
      <Header>
        Счета
      </Header>
      <HorizontalList className="mt-1">
        {accounts.map(account => {
          return <AccountBox key={account.id}
                             account={account} />
        })}
      </HorizontalList>
    </section>
    <section className="mt-2">
      <Header>
        Приходы
      </Header>
      <HorizontalList className="mt-1">
        {categories.filter(category => category.type === 'income').map(category => {
          return <CategoryBox key={category.id}
                              currency={currency}
                              category={category} />
        })}
      </HorizontalList>
    </section>
    <section className="mt-2">
      <Header>
        Расходы
      </Header>
      <HorizontalList className="mt-1">
        {categories.filter(category => category.type === 'expense').map(category => {
          return <CategoryBox key={category.id}
                              currency={currency}
                              category={category} />
        })}
      </HorizontalList>
    </section>
    <section className="mt-2">
      <Header>
        Последние транзакции
      </Header>
      <VerticalList className="mt-1">
        {transactions.map(transaction => {
          return <TransactionBox key={transaction.id}
                                 transaction={transaction} />
        })}
      </VerticalList>
      <section className="flex mt-2">
        <DefaultLink to="/transactions">
          Все транзакции
        </DefaultLink>
      </section>
    </section>
  </>;
}