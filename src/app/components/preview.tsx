import { ReactNode } from "react";

interface PreviewProps {
  children?: ReactNode;
}

export default function Preview({ children }: PreviewProps) {
  return (
    <div className="border rounded-md max-w-full w-full p-2 shadow-sm flex flex-col space-y-2">
      {children}
    </div>
  );
}
