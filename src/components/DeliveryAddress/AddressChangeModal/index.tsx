import { useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { setSelectedOrderName, setSelectedPhoneNumber } from '../../../store/slice/orderSlice';
import Colors from '../../../styles/Colors';
import { patchDefaultAddressesByUserId } from '../../../utils/api/DeliverAddress/patchDefaultAddressesByUserId';
import { formatPhoneNumber } from '../../../utils/fomatter/formatPhoneNumber';
import { Button } from '../../UI/Button';
import { BetweenFlex, CenterFlex, StartFlex } from '../../UI/Flex';
import { FontStyle } from '../../UI/FontStyle';
import { StyledInput } from '../../UI/StyledInput';
import { TextArea } from '../../UI/TextArea';
import { AddressChangeModalWrapper, AddressList } from './style';

interface AddressChangeModalpProps {
    handleClose: () => void;
}

function AddressChangeModal({ handleClose }: AddressChangeModalpProps) {
    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector((state: RootState) => state.auth);
    const { address1, address2, address3 } = useSelector(
        (state: RootState) => state.deliverAddress,
    );

    const [{ postalCode, address, detailedAddress }, setAddress] = useState({
        postalCode: address1,
        address: address2,
        detailedAddress: address3,
    });

    const [name, setName] = useState(userInfo.name);
    const [phoneNumber, setPhoneNumber] = useState(formatPhoneNumber(userInfo.phoneNumber));

    const userNameChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        dispatch(setSelectedOrderName(event.target.value));
    };

    const phoneNumberChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = formatPhoneNumber(event.target.value);
        setPhoneNumber(result);
        dispatch(setSelectedPhoneNumber(result));
    };

    const open = useDaumPostcodePopup();

    const handleComplete = (data: Address) => {
        let address2 = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            address2 += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setAddress((prevState) => {
            return { ...prevState, postalCode: data.zonecode, address: address2 };
        });
    };

    const deliveryAddressPatchHandler = async () => {
        const result = await dispatch(
            patchDefaultAddressesByUserId({
                address1: postalCode,
                address2: address,
                address3: detailedAddress,
                user_id: userInfo.id,
            }),
        );
        if (result.type === 'deliverAddress/patch/fulfilled') {
            handleClose();
        }
    };

    const searchAddressHandler = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <AddressChangeModalWrapper>
            <CenterFlex style={{ height: '65px', background: `${Colors.White}` }}>
                <FontStyle style={{ fontSize: '22px' }}>배송지 수정</FontStyle>
            </CenterFlex>
            <AddressList>
                <BetweenFlex style={{ marginBottom: '20px' }}>
                    <div style={{ width: '100px', color: Colors.Gray2 }}>이름</div>
                    <StyledInput
                        type="text"
                        name="name"
                        value={name}
                        readOnly
                        onChange={userNameChangehandler}
                    />
                </BetweenFlex>
                <BetweenFlex style={{ marginBottom: '20px' }}>
                    <div style={{ width: '100px', color: Colors.Gray2 }}>연락처</div>
                    <StyledInput
                        type="text"
                        placeholder="입력해주세요"
                        maxLength={13}
                        value={phoneNumber}
                        readOnly
                        onChange={phoneNumberChangehandler}
                    />
                </BetweenFlex>
                <BetweenFlex>
                    <div style={{ color: Colors.Gray2 }}>주소</div>
                    <StartFlex>
                        <Button
                            color={Colors.SkyBlue}
                            style={{
                                border: `1px solid ${Colors.SkyBlue}`,
                                fontWeight: 'bold',
                                width: '85px',
                                height: '40px',
                            }}
                            onClick={searchAddressHandler}
                        >
                            주소 찾기
                        </Button>
                        <StyledInput
                            style={{ background: Colors.Gray8 }}
                            type="text"
                            placeholder="입력해주세요"
                            value={`${postalCode}`}
                            readOnly
                        />
                    </StartFlex>
                </BetweenFlex>
                <BetweenFlex>
                    <div style={{ width: '100px', color: Colors.Gray2 }}></div>
                    <TextArea
                        style={{ background: Colors.Gray8 }}
                        placeholder="입력해주세요"
                        value={`${address}`}
                        readOnly
                    />
                </BetweenFlex>
                <BetweenFlex>
                    <div style={{ width: '100px', color: Colors.Gray2 }}></div>
                    <StyledInput
                        type="text"
                        placeholder="입력해주세요"
                        value={`${detailedAddress}`}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setAddress((prevState) => {
                                return { ...prevState, detailedAddress: event.target.value };
                            });
                        }}
                    />
                </BetweenFlex>
            </AddressList>
            <Button
                style={{
                    background: Colors.SkyBlue,
                    color: Colors.White,
                    position: 'absolute',
                    width: '380px',
                    height: '40px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    margin: '10px',
                    bottom: '3%',
                }}
                onClick={deliveryAddressPatchHandler}
            >
                저장
            </Button>
        </AddressChangeModalWrapper>
    );
}

export default AddressChangeModal;
