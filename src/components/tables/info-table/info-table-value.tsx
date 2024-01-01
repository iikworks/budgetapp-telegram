import { ReactNode } from "react";

type InfoTableValueProps = {
  children: ReactNode;
};

export default function InfoTableValue(props: InfoTableValueProps) {
  return <td className="py-2 px-4 font-medium">
    {props.children}
  </td>;
}
