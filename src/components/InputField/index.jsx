import { InputBox, InputFieldWrapper } from './style';

const InputField = (props) => {
    return (
        <InputFieldWrapper>
            <InputBox>
                <input type="text" required="required" />
                <span>{props.text}</span>
            </InputBox>
        </InputFieldWrapper>
    );
};

export default InputField;
