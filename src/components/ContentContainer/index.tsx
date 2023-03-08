import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
    setSelectedTitle,
    setSelectedDescription,
    setSelectedPrevPrice,
    setSelectedSellPrice,
    setSelectedMinAmount,
    setSelectedStatus,
    setSelectedCategoryId,
} from '../../store/slice/productSlice';
import Dialog from '../Dialog';
import Dropdown from '../Dropdown';
import { StyledTextArea } from '../UI/StyledInput';
import { ContentWrapper, InputBox, Left, Rigth, TextAreaBox } from './style';

function ContentContainer() {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

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

    const categories = useSelector((state: RootState) => state.product.categories);

    const [category, setCategory] = useState('카테고리 선택');

    const dropdownCloseHandler = (index: number) => {
        setCategory(categories[index].name);
        dispatch(setSelectedCategoryId(categories[index].id));
        setSelect(false);
    };

    // 상품정보 등록 관련 State
    const { prevPrice, minAmount, sellPrice } = useSelector((state: RootState) => state.product);

    return (
        <ContentWrapper>
            <Left className="left">
                <InputBox>
                    <label htmlFor="content-title">상품명</label>
                    <input
                        type="text"
                        id="content-title"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(setSelectedTitle(e.target.value));
                        }}
                    />
                </InputBox>
                <TextAreaBox>
                    <div>상품 설명란</div>
                    <StyledTextArea
                        placeholder="내용을 입력해주세요."
                        id="content-description"
                        onFocus={isActiveHandler}
                        onBlur={isActiveHandler}
                        // isActive={isActive}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            dispatch(setSelectedDescription(e.target.value));
                        }}
                    />
                </TextAreaBox>
                <Dropdown
                    onDialog={handleDialog}
                    isSelected={select}
                    isCategory={category}
                    onSelectToggleHandler={selectToggleHandler}
                    onDropdownCloseHandler={dropdownCloseHandler}
                />
                {dialog && (
                    <Dialog
                        onDialog={handleDialog}
                        isCategory={category}
                        onDropdownCloseHandler={dropdownCloseHandler}
                    />
                )}
            </Left>
            <Rigth>
                <InputBox>
                    <label htmlFor="prevPrice">상품 가격</label>
                    <input
                        type="number"
                        id="prevPrice"
                        defaultValue={prevPrice}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(setSelectedPrevPrice(e.target.value));
                        }}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor="sellPrice">판매 가격</label>
                    <input
                        type="number"
                        id="sellPrice"
                        defaultValue={minAmount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(setSelectedSellPrice(e.target.value));
                        }}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor="minAmount">최소주문수량</label>
                    <input
                        type="number"
                        id="minAmount"
                        defaultValue={sellPrice}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(setSelectedMinAmount(e.target.value));
                        }}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor="status">판매 상태</label>
                    <input
                        type="text"
                        id="status"
                        defaultValue={'판매중'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(setSelectedStatus(e.target.value));
                        }}
                    />
                </InputBox>
            </Rigth>
        </ContentWrapper>
    );
}

export default ContentContainer;
