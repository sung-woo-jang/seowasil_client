import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
    addDescription,
    addMinAmount,
    addPrevPrice,
    addSellPrice,
    addStatus,
    addTitle,
} from '../../store/slice/productSlice';
import Dialog from '../Dialog';
import Dropdown from '../Dropdown';
import { TextArea } from '../UI/TextArea';
import { ContentWrapper, InputBox, Left, Rigth, TextAreaBox } from './style';

const data = [
    { id: 1, title: '파스티기아타' },
    { id: 2, title: '문그로우' },
    { id: 3, title: '블루 애로우' },
];

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

    const [category, setCategory] = useState(data[0].title);
    const dropdownCloseHandler = (index: number) => {
        setCategory(data[index].title);
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
                            dispatch(addTitle(e.target.value));
                        }}
                    />
                </InputBox>
                <TextAreaBox>
                    <div>상품 설명란</div>
                    <TextArea
                        placeholder="내용을 입력해주세요."
                        id="content-description"
                        onFocus={isActiveHandler}
                        onBlur={isActiveHandler}
                        isActive={isActive}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            dispatch(addDescription(e.target.value));
                        }}
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
            </Left>
            <Rigth>
                <InputBox>
                    <label htmlFor="prevPrice">상품 가격</label>
                    <input
                        type="number"
                        id="prevPrice"
                        defaultValue={prevPrice}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(addPrevPrice(e.target.value));
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
                            dispatch(addSellPrice(e.target.value));
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
                            dispatch(addMinAmount(e.target.value));
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
                            dispatch(addStatus(e.target.value));
                        }}
                    />
                </InputBox>
            </Rigth>
        </ContentWrapper>
    );
}

export default ContentContainer;
