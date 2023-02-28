import { TableWrapper } from './style';

interface TableProps {
    children: React.ReactNode;
}

function Table({ children }: TableProps) {
    return <TableWrapper>{children}</TableWrapper>;
}

export default Table;
