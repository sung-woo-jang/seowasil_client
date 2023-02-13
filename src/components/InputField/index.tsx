import { InputBox, InputFieldWrapper } from './style';

const InputField = (props) => {
    return (
        <InputFieldWrapper>
            <InputBox>
                <input
                    type={props.isType ? props.isType : 'text'}
                    required
                    ref={props.inputRef}
                />
                <span></span>
                <label>{props.text}</label>
            </InputBox>
        </InputFieldWrapper>
    );
};

export default InputField;
