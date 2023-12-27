import { ReactNode } from "react";

type VerticalListProps = {
  className?: string;
  children: ReactNode;
};

export default function VerticalList(props: VerticalListProps) {
  return <section className={`space-y-1 ${props.className ?? ''}`}>
    {props.children}
  </section>;
}