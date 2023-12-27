import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

export default function Header(props: HeaderProps) {
  return <h2 className="text-lg font-medium rounded-2xl px-4 py-2 font-medium tg_secondary-bg__bg">
    {props.children}
  </h2>;
}
