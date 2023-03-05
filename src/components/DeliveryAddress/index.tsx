import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DeliveryAddressWrapper } from './style';

function DeliveryAddress() {
    const { name, address, phoneNumber } = useSelector((state: RootState) => state.auth);
    return (
        <DeliveryAddressWrapper>
            <div style={{ display: 'flex' }}>
                <div>배송지</div>
                <div></div>
                <button type="button">변경</button>
            </div>
            <div>
                <div>
                    <div>{name}</div>
                </div>
                <div>
                    {address?.address2} {address?.address3}
                </div>
                <div>
                    <div className="name">{name}</div>
                    <div className="phone">{phoneNumber}</div>
                </div>
                <label htmlFor="save-default-address-input">
                    <div>
                        <input
                            type="checkbox"
                            id="save-default-address-input"
                            name="isChangeDefaultAddress"
                        />
                    </div>
                    기본 배송지로 저장
                </label>
                <div>
                    <input type="text" placeholder="배송 요청사항을 입력해주세요" />
                </div>
            </div>
        </DeliveryAddressWrapper>
    );
}

export default DeliveryAddress;
