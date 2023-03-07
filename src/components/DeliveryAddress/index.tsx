import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Colors from '../../styles/Colors';
import { formatPhoneNumber } from '../../utils/fomatter/formatPhoneNumber';
import { Button } from '../UI/Button';
import { BetweenFlex, StartFlex } from '../UI/Flex';
import { FontStyle } from '../UI/FontStyle';
import { StyledTextArea } from '../UI/StyledInput';
import { AddressDetail, DefaultDelivery, DeliveryAddressWrapper } from './style';

function DeliveryAddress() {
    const { name, phoneNumber } = useSelector((state: RootState) => state.auth);
    return (
        <DeliveryAddressWrapper>
            <BetweenFlex>
                <FontStyle>배송지</FontStyle>
                <div></div>
                <Button
                    color={Colors.SkyBlue}
                    style={{ fontSize: '16px', lineHeight: '19px', fontWeight: 'bold' }}
                >
                    변경
                </Button>
            </BetweenFlex>
            <div>
                <StartFlex>
                    <FontStyle>{name}</FontStyle>
                    <DefaultDelivery>기본 배송지</DefaultDelivery>
                </StartFlex>
                <AddressDetail>
                    {' '}
                    address2: 인천 미추홀구 숙골로 43번길 59, address3: 402호{' '}
                </AddressDetail>
                <StartFlex>
                    <FontStyle style={{ color: Colors.Gray2, fontWeight: '400', fontSize: '15px' }}>
                        {name}
                    </FontStyle>
                    <FontStyle
                        style={{
                            color: Colors.Gray2,
                            fontWeight: '400',
                            fontSize: '15px',
                            marginLeft: '8px',
                        }}
                    >
                        {formatPhoneNumber(phoneNumber)}
                    </FontStyle>
                </StartFlex>
                <div style={{ margin: '20px 0' }}>
                    <input
                        type="checkbox"
                        id="save-default-address-input"
                        name="isChangeDefaultAddress"
                    />
                    &nbsp;&nbsp;&nbsp;기본 배송지로 저장
                </div>
                <div>
                    <StyledTextArea placeholder="배송 요청사항을 입력해주세요" />
                </div>
            </div>
        </DeliveryAddressWrapper>
    );
}

export default DeliveryAddress;
