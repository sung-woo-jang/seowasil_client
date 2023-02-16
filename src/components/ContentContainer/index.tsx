import { useState } from 'react';
import Dialog from '../Dialog';
import Dropdown from '../Dropdown';
import { TextArea } from '../UI/TextArea';
import { ContentWrapper, InputBox, TextAreaBox } from './style';

const data = [
    { id: 1, title: '파스티기아타' },
    { id: 2, title: '문그로우' },
    { id: 3, title: '블루 애로우' },
];

function ContentContainer() {
    const [isActive, setIsActive] = useState(false);

    const isActiveHandler = () => {
        setIsActive(!isActive);
    };

    // Dialog

    const [dialog, setDialog] = useState(false);
    const handleDialog = () => {
        setDialog(!dialog);
    };

    // Dropdown State
    const [select, setSelect] = useState(false);
    const selectToggleHandler = () => {
        setSelect(!select);
    };

    const [category, setCategory] = useState(data[0].title);
    const dropdownCloseHandler = (index: number) => {
        setCategory(data[index].title);
        setSelect(false);
    };

    return (
        <ContentWrapper>
            <InputBox>
                <label htmlFor="content-title">상품명</label>
                <input type="text" id="content-title" />
            </InputBox>
            <TextAreaBox>
                <div>상품 설명란</div>
                <TextArea
                    placeholder="내용을 입력해주세요."
                    id="content-description"
                    onFocus={isActiveHandler}
                    onBlur={isActiveHandler}
                    isActive={isActive}
                />
            </TextAreaBox>
            <Dropdown
                onDialog={handleDialog}
                isData={data}
                isSelected={select}
                isCategory={category}
                onSelectToggleHandler={selectToggleHandler}
                onDropdownCloseHandler={dropdownCloseHandler}
            />
            {dialog && (
                <Dialog
                    isData={data}
                    onDialog={handleDialog}
                    isCategory={category}
                    onSelectToggleHandler={selectToggleHandler}
                    onDropdownCloseHandler={dropdownCloseHandler}
                />
            )}
        </ContentWrapper>
    );
}

export default ContentContainer;
