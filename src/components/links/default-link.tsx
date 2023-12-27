import { ReactNode } from "react";
import { Link } from "react-router-dom";

type DefaultLinkProps = {
  to: string;
  children: ReactNode;
};

export default function DefaultLink(props: DefaultLinkProps) {
  return <Link
    to={props.to}
    className="w-full text-center rounded-2xl px-4 py-2 font-medium tg_button-bg__bg tg_button-text__text">
    {props.children}
  </Link>;
}
