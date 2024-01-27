'use client';
import Button from '@mui/material/Button';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { Colors } from '../../../styles/global-variables';
import { UseFormSetValue } from 'react-hook-form';
import { SignupFormValues } from './SignupForm';

interface IAddressFormProps {
  setFormValue: UseFormSetValue<SignupFormValues>;
}

const buttonStyle = {
  marginTop: '0.5rem',
  width: '100%',
  border: `1px solid ${Colors.SkyBlue}`,
  fontWeight: 'bold',
  fontSize: '15px',
} as React.CSSProperties;

function AddressForm({ setFormValue }: IAddressFormProps) {
  const open = useDaumPostcodePopup();

  const handleComplete = ({
    zonecode,
    address,
    addressType,
    bname,
    buildingName,
  }: Address) => {
    let roadAddress = address;
    let extraAddress = '';

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }
      if (buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${buildingName}` : buildingName;
      }
      roadAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setFormValue('zoneCode', zonecode);
    setFormValue('roadAddress', roadAddress);
  };

  const searchAddressHandler = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <Button style={buttonStyle} onClick={searchAddressHandler}>
      주소 검색하기
    </Button>
  );
}

export default AddressForm;
