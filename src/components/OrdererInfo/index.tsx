import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Flex } from '../UI/Flex';
import { Content, ExtendBox, Label, OrdererInfoWrapper } from './style';

function OrdererInfo() {
    const userInfo = useSelector((state: RootState) => state.auth);
    const [name, setName] = useState(userInfo.name);
    const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
    const [toggle, setToggle] = useState(false);

    const userNameChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const phoneNumberChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = event.target.value
            .replace(/-/g, '')
            .replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');

        setPhoneNumber(formattedPhoneNumber);
    };

    const extendContentToggleHandler = () => {
        setToggle(!toggle);
    };

    return (
        <OrdererInfoWrapper>
            <ExtendBox className="open expanded" onClick={extendContentToggleHandler}>
                <Label>
                    <Flex>
                        <div>주문자</div>
                        <div>
                            {toggle ? null : (
                                <Fragment>
                                    {name} <span>{phoneNumber}</span>
                                </Fragment>
                            )}
                            <span>&nbsp;&nbsp;&nbsp;{toggle ? '-' : '+'}</span>
                        </div>
                    </Flex>
                </Label>
            </ExtendBox>
            <Content isActive={toggle}>
                <Flex>
                    <div>이름</div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={userNameChangehandler}
                        />
                    </div>
                </Flex>
                <Flex>
                    <div>휴대전화</div>
                    <div>
                        <input
                            type="text"
                            placeholder="입력해주세요"
                            maxLength={13}
                            value={phoneNumber}
                            onChange={phoneNumberChangehandler}
                        />
                    </div>
                </Flex>
            </Content>
        </OrdererInfoWrapper>
    );
}

export default OrdererInfo;
