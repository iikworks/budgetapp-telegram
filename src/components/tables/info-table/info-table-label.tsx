import { ReactNode } from "react";

type InfoTableLabelProps = {
  children: ReactNode;
};

export default function InfoTableLabel(props: InfoTableLabelProps) {
  return <td className="py-2 px-4">
    {props.children}
  </td>;
}
