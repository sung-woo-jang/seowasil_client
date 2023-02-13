import { TableWrapper } from './style';

type TableProps = {
    children: React.ReactNode;
};

function Table({ children }: TableProps) {
    return <TableWrapper>{children}</TableWrapper>;
}

export default Table;
