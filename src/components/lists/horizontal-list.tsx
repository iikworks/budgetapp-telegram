import { ReactNode } from "react";

type HorizontalListProps = {
  className?: string;
  children: ReactNode;
};

export default function HorizontalList(props: HorizontalListProps) {
  return <section className={`flex gap-1 overflow-x-auto items-center w-full ${props.className ?? ''}`}>
    {props.children}
  </section>;
}