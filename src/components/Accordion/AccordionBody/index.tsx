import { ReactNode } from 'react';
import { AccordionBodyWrapper } from './style';

interface ExtendsContainerProps {
    isActive: boolean;
    children: ReactNode;
}

function AccordionBody({ isActive, children }: ExtendsContainerProps) {
    return <AccordionBodyWrapper isActive={isActive}>{children}</AccordionBodyWrapper>;
}

export default AccordionBody;
