import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const DeliveryAddressWrapper = styled.section`
    background: ${Colors.White};
`;

export const DefaultDelivery = styled.div`
    padding: 3px 8px;
    box-sizing: border-box;
    border: 1px solid ${Colors.SkyBlue};
    border-radius: 100px;
    font-size: 12px;
    line-height: 14px;
    color: ${Colors.SkyBlue};
    margin-left: 8px;
`;

export const AddressDetail = styled.div`
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
    word-break: break-word;
`;
