import { Link } from "react-router-dom";
import { Category } from "../../types/category";
import { formatCurrency } from "../../utils";

type CategoryBoxProps = {
  category: Category;
  currency: string;
};

export default function CategoryBox(props: CategoryBoxProps) {
  return <Link to={`/categories/${props.category.id}`} className={`p-4 flex-1 tg_secondary-bg__bg flex justify-between items-center rounded-2xl`}
                  style={{
                    minWidth: 'calc(100vw - 76px)',
  }}>
    <section className={`text-center w-[40%] border-r tg_hint__border bg-gradient-to-r text-transparent bg-clip-text ${props.category.type === 'income' ? 'from-teal-600 via-green-400 to-teal-600' : 'from-purple-600 via-red-400 to-rose-600'}`}>
      <h2 className="leading-5 font-medium">
        {formatCurrency(props.category.amount_per_period, props.currency)}
      </h2>
      <h4 className="leading-5 text-sm font-light">{props.currency}</h4>
    </section>
    <section className="text-center w-[60%]">
      <h2 className="leading-5 font-medium">
        {props.category.title}
      </h2>
    </section>
  </Link>;
}
