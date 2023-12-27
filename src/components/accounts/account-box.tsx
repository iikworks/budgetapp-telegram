import { Link } from "react-router-dom";
import { Account } from "../../types/account";
import { formatCurrency } from "../../utils";

type AccountBoxProps = {
  account: Account;
};

export default function AccountBox(props: AccountBoxProps) {
  return <Link to={`/accounts/${props.account.id}`} className={`p-4 flex-1 tg_secondary-bg__bg flex justify-between items-center rounded-2xl`}
                  style={{
                    minWidth: 'calc(100vw - 76px)',
  }}>
    <section className="text-center border-r tg_hint__border bg-gradient-to-r from-purple-600 via-violet-600 to-red-400 text-transparent bg-clip-text w-[40%]">
      <h2 className="leading-5 font-medium">
        {formatCurrency(props.account.balance, props.account.currency)}
      </h2>
      <h4 className="leading-5 text-sm font-light">{props.account.currency}</h4>
    </section>
    <section className="text-center w-[60%]">
      <h2 className="leading-5 font-medium">
        {props.account.title}
      </h2>
    </section>
  </Link>;
}
