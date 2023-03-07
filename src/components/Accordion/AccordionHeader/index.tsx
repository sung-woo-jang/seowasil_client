import { ReactNode } from 'react';
import { AccordionHeaderWrapper } from './style';

interface AccordionHeaderProps {
    children: ReactNode;
    onClick?: () => void;
}

function AccordionHeader({ children, onClick }: AccordionHeaderProps) {
    return <AccordionHeaderWrapper onClick={onClick}>{children}</AccordionHeaderWrapper>;
}

export default AccordionHeader;
