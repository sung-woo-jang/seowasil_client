import { InputBox, InputFieldWrapper } from './style';

type InputFieldProps = {
    isType?: string;
    text: string;
};

function InputField({ isType, text }: InputFieldProps) {
    return (
        <InputFieldWrapper>
            <InputBox>
                <input type={isType ? isType : 'text'} required />
                <span></span>
                <label>{text}</label>
            </InputBox>
        </InputFieldWrapper>
    );
}

export default InputField;
