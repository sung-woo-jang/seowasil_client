import { InputBox, InputFieldWrapper } from './style';

interface InputFieldProps {
    isType?: string;
    text: string;
    isValue: string;
}

function InputField({ isType, text, isValue }: InputFieldProps) {
    return (
        <InputFieldWrapper>
            <InputBox>
                <input type={isType ? isType : 'text'} required readOnly value={isValue} />
                <span></span>
            </InputBox>
        </InputFieldWrapper>
    );
}

export default InputField;
