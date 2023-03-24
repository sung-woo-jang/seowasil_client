import { KeyboardArrowUp } from '@mui/icons-material';
import { Fragment, useState } from 'react';
import Colors from '../../styles/Colors';
import AccordionBody from '../Accordion/AccordionBody';
import AccordionHeader from '../Accordion/AccordionHeader';
import { BetweenFlex, StartFlex } from '../UI/Flex';
import { FontStyle } from '../UI/FontStyle';
import { RotateIcon } from '../UI/RotateIcon';
import { StyledInput } from '../UI/StyledInput';
import { Label, OrdererInfoWrapper } from './style';

interface OrdererInfoProps {
    onUserNameChangehandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPhoneNumberChangehandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    phoneNumber: string;
}

// 주문자 정보
function OrdererInfo({
    onUserNameChangehandler,
    onPhoneNumberChangehandler,
    name,
    phoneNumber,
}: OrdererInfoProps) {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle);
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
                        onChange={onUserNameChangehandler}
                    />
                </BetweenFlex>
                <BetweenFlex>
                    <div style={{ width: '100px', color: Colors.Gray2 }}>휴대전화</div>
                    <StyledInput
                        type="text"
                        placeholder="입력해주세요"
                        maxLength={13}
                        value={phoneNumber}
                        onChange={onPhoneNumberChangehandler}
                    />
                </BetweenFlex>
            </AccordionBody>
        </OrdererInfoWrapper>
    );
}

export default OrdererInfo;
