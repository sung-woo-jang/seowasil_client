import { ButtonWrapper } from './style';

interface ButtonProps {
    contained?: boolean;
    children: React.ReactNode;
}

function Button({ contained, children }: ButtonProps) {
    return <ButtonWrapper contained={contained}>{children}</ButtonWrapper>;
}

export default Button;
