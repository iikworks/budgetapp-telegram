import { Link } from "react-router-dom";
import { Transaction } from "../../types/transaction";
import { formatCurrency } from "../../utils";

type TransactionProps = {
  transaction: Transaction;
};

export default function TransactionBox(props: TransactionProps) {
  const type = props.transaction.transfer !== null || props.transaction.category?.type === 'income' ? 'income' : 'expense';
  
  return <Link to={`/transactions/${props.transaction.id}`} className={`p-4 tg_secondary-bg__bg flex justify-between items-center rounded-2xl`}>
    <section className={`text-center w-[34%] border-r tg_hint__border bg-gradient-to-r text-transparent bg-clip-text ${type === 'income' ? 'from-teal-600 via-green-400 to-teal-600' : 'from-purple-600 via-red-400 to-rose-600'}`}>
      <h2 className="leading-5 font-medium">
        {`${type === 'income' ? '+' : '-'}${formatCurrency(props.transaction.amount, props.transaction.account.currency)}`}
      </h2>
      <h4 className="leading-5 text-sm font-light">{props.transaction.account.currency}</h4>
    </section>
    <section className="text-center w-[66%]">
      <h2 className="leading-5 font-medium">
        {props.transaction.category?.title}
      </h2>
      <h4 className="leading-5 text-sm font-light">
        Счёт: {props.transaction.account.title}
      </h4>
    </section>
  </Link>;
}