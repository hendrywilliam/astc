import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {}

export default function CustomParagraph({ children }: Props) {
  return <p className="user-defined__paragraph text-red-600">{children}</p>;
}
