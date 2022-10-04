import { ReactNode } from "react";
import { BodyTable } from "./styles";

interface TableProps {
  children: ReactNode;
}

const Table: React.FC <TableProps> = ({ children }) => {
  return (
    <>
      <BodyTable>
          {children}
      </BodyTable>
    </>
  );
};
export default Table;
