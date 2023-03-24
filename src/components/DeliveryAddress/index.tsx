import { Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setSelecteddeliveryRequest } from '../../store/slice/orderSlice';
import Colors from '../../styles/Colors';
import { getDefaultAddressesByUserId } from '../../utils/api/DeliverAddress/getDefaultAddressesByUserId';
import { formatPhoneNumber } from '../../utils/fomatter/formatPhoneNumber';
import { Button } from '../UI/Button';
import { BetweenFlex, StartFlex } from '../UI/Flex';
import { FontStyle } from '../UI/FontStyle';
import { StyledTextArea } from '../UI/StyledInput';
import AddressChangeModal from './AddressChangeModal';
import { AddressDetail, DefaultDelivery, DeliveryAddressWrapper } from './style';

function DeliveryAddress() {
    const dispatch = useDispatch<AppDispatch>();
    const { name, phoneNumber, isLogin, id } = useSelector((state: RootState) => state.auth);
    const { address2, address3 } = useSelector((state: RootState) => state.deliverAddress);
    const { delivery_request } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        if (isLogin) dispatch(getDefaultAddressesByUserId(id));
    }, [isLogin, id, dispatch]);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DeliveryAddressWrapper>
            <BetweenFlex>
                <FontStyle>배송지</FontStyle>
                <div className="dialog">
                    <Dialog open={open} onClose={handleClose}>
                        <AddressChangeModal handleClose={handleClose} />
                    </Dialog>
                </div>
                <Button
                    color={Colors.SkyBlue}
                    style={{ fontSize: '16px', lineHeight: '19px', fontWeight: 'bold' }}
                    onClick={handleClickOpen}
                >
                    변경
                </Button>
            </BetweenFlex>
            <div>
                <StartFlex>
                    <FontStyle>{name}</FontStyle>
                    <DefaultDelivery>기본 배송지</DefaultDelivery>
                </StartFlex>
                <AddressDetail>{`${address2}, ${address3}`}</AddressDetail>
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
                    <StyledTextArea
                        placeholder="배송 요청사항을 입력해주세요"
                        value={delivery_request}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            dispatch(setSelecteddeliveryRequest(e.target.value));
                        }}
                    />
                </div>
            </div>
        </DeliveryAddressWrapper>
    );
}

export default DeliveryAddress;
