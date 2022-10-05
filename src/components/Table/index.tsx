import { ReactNode } from "react";
import { TableHome } from "./styles";

interface TableProps {
  children: ReactNode;
}

const Table: React.FC <TableProps> = ({ children }) => {
  return (
    <>
      <TableHome>
          {children}
      </TableHome>
    </>
  );
};
export default Table;
