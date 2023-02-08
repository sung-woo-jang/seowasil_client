import { ButtonWrapper } from './style';

const Button = (props) => {
    return <ButtonWrapper contained={props.contained}>{props.children}</ButtonWrapper>;
};

export default Button;
