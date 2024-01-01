import { ReactNode } from "react";

type InfoTableProps = {
  children: ReactNode;
  className?: string;
};

export default function InfoTable(props: InfoTableProps) {
  return <table className={`w-full rounded-2xl tg_secondary-bg__bg ${props.className ?? ''}`}>
    <tbody>
      {props.children}
    </tbody>
  </table>;
}
