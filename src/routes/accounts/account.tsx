import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/headers/header";
import { useEffect, useState } from "react";
import { Account } from "../../types/account";
import { accounts } from "../../data";
import DefaultLink from "../../components/links/default-link";

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

  if (account === undefined) {
    return <section>Loading...</section>;
  }

  return <>
    <section className="flex">
      <DefaultLink to="/">
        Назад
      </DefaultLink>
    </section>
    <section className="mt-2">
      <Header>{account.title}</Header>
    </section>
  </>;
}

