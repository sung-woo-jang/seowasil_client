import { KeyboardArrowUp } from '@mui/icons-material';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setSelectedOrderName, setSelectedPhoneNumber } from '../../store/slice/orderSlice';
import Colors from '../../styles/Colors';
import { formatPhoneNumber } from '../../utils/fomatter/formatPhoneNumber';
import AccordionBody from '../Accordion/AccordionBody';
import AccordionHeader from '../Accordion/AccordionHeader';
import { BetweenFlex, StartFlex } from '../UI/Flex';
import { FontStyle } from '../UI/FontStyle';
import { RotateIcon } from '../UI/RotateIcon';
import { StyledInput } from '../UI/StyledInput';
import { Label, OrdererInfoWrapper } from './style';

// 주문자 정보
function OrdererInfo() {
    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector((state: RootState) => state.auth);
    const [name, setName] = useState(userInfo.name);
    const [phoneNumber, setPhoneNumber] = useState(formatPhoneNumber(userInfo.phoneNumber));
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle);
    };

    const userNameChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        dispatch(setSelectedOrderName(event.target.value));
    };

    const phoneNumberChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = formatPhoneNumber(event.target.value);
        setPhoneNumber(result);
        dispatch(setSelectedPhoneNumber(result));
    };

    return (
        <OrdererInfoWrapper>
            <AccordionHeader onClick={toggleHandler}>
                <Label>
                    <BetweenFlex>
                        <FontStyle>주문자</FontStyle>
                        <StartFlex>
                            {toggle ? null : (
                                <Fragment>
                                    {name}&nbsp;&nbsp;&nbsp;
                                    <span>{phoneNumber}</span>
                                </Fragment>
                            )}
                            <RotateIcon isActive={toggle}>
                                &nbsp;&nbsp; <KeyboardArrowUp />
                            </RotateIcon>
                        </StartFlex>
                    </BetweenFlex>
                </Label>
            </AccordionHeader>
            <AccordionBody isActive={toggle}>
                <BetweenFlex>
                    <div style={{ width: '100px', color: Colors.Gray2 }}>이름</div>
                    <StyledInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={userNameChangehandler}
                    />
                </BetweenFlex>
                <BetweenFlex>
                    <div style={{ width: '100px', color: Colors.Gray2 }}>휴대전화</div>
                    <StyledInput
                        type="text"
                        placeholder="입력해주세요"
                        maxLength={13}
                        value={phoneNumber}
                        onChange={phoneNumberChangehandler}
                    />
                </BetweenFlex>
            </AccordionBody>
        </OrdererInfoWrapper>
    );
}

export default OrdererInfo;
