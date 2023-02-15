import { useState } from 'react';
import CategoryDialog from '../CategoryDialog';
import Dropdown from '../Dropdown';
import { TextArea } from '../UI/TextArea';
import { ContentWrapper, InputBox, TextAreaBox } from './style';

function ContentContainer() {
    const [isActive, setIsActive] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    const dialogCloseHandler = () => {
        setDialogOpen(false);
    };

    const isActiveHandler = () => {
        setIsActive(!isActive);
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
            <Dropdown />
            <CategoryDialog isOpen={dialogOpen} dialogCloseHandler={dialogCloseHandler} />
        </ContentWrapper>
    );
}

export default ContentContainer;
