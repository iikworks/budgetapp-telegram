import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/headers/header";
import { useEffect, useState } from "react";
import { Account } from "../../types/account";
import { accounts, transactions } from "../../data";
import DefaultLink from "../../components/links/default-link";
import FullScreenLoader from "../../components/full-screen-loader";
import VerticalList from "../../components/lists/vertical-list";
import TransactionBox from "../../components/transactions/transaction-box";
import InfoTable from "../../components/tables/info-table";
import InfoTableRow from "../../components/tables/info-table/info-table-row";
import InfoTableLabel from "../../components/tables/info-table/info-table-label";
import InfoTableValue from "../../components/tables/info-table/info-table-value";
import { formatCurrency } from "../../utils";
import moment from 'moment/moment';
import { AnimatePresence, motion } from "framer-motion";
import { defaultAnimation } from "../../animations";

export default function AccountPage() {
  const { id } = useParams<{
    id?: string,
  }>();
  const navigate = useNavigate();

  const [account, setAccount] = useState<Account | undefined>();

  const fetchAccount = (id: number) => {
    const foundAccount = accounts.find(accountInList => accountInList.id === id);
    if (foundAccount === undefined) {
      navigate('/');
      return;
    }

    setAccount(foundAccount);
  }

  useEffect(() => {
    fetchAccount(id ? parseInt(id) : 0);
  }, [id]);

  return <AnimatePresence>
    {account === undefined &&<motion.div
        onClick={(e) => e.stopPropagation()}
        variants={defaultAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
      <FullScreenLoader />
    </motion.div>}
    {account !== undefined &&<motion.div
        onClick={(e) => e.stopPropagation()}
        variants={defaultAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
      <section className="flex">
        <DefaultLink to="/">
          Назад
        </DefaultLink>
      </section>
      <section className="mt-2">
        <Header>Информация о счёте</Header>
        <InfoTable className="mt-1">
          <InfoTableRow last={false}>
            <InfoTableLabel>
              Название
            </InfoTableLabel>
            <InfoTableValue>
              {account.title}
            </InfoTableValue>
          </InfoTableRow>
          <InfoTableRow last={false}>
            <InfoTableLabel>
              Баланс
            </InfoTableLabel>
            <InfoTableValue>
              {formatCurrency(account.balance, account.currency)} {account.currency}
            </InfoTableValue>
          </InfoTableRow>
          <InfoTableRow last={true}>
            <InfoTableLabel>
              Создан
            </InfoTableLabel>
            <InfoTableValue>
              {moment(account.created_at).format('D MMMM YYYY г.')}
            </InfoTableValue>
          </InfoTableRow>
        </InfoTable>
      </section>
      <section className="mt-2">
        <Header>Последние транзакции</Header>
        <VerticalList className="mt-1">
          {transactions.map(transaction => {
            return <TransactionBox key={transaction.id}
                                  transaction={transaction} />
          })}
        </VerticalList>
        <section className="flex mt-2">
          <DefaultLink to="/transactions">
            Все транзакции счёта
          </DefaultLink>
        </section>
      </section>
    </motion.div>}
  </AnimatePresence>;
}

