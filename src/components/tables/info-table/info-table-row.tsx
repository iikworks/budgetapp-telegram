import { ReactNode } from "react";

type InfoTableRowProps = {
  last: boolean;
  children: ReactNode;
};

export default function InfoTableRow(props: InfoTableRowProps) {
  return <tr className={`${props.last ? '' : 'border-b-2'}`}>
    {props.children}
  </tr>;
}
