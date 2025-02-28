import { FC, PropsWithChildren } from "react";

export const ContentCard: FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-gray-800 rounded-md p-4">{children}</div>
);
