import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import DeliveryAddress from '../../components/DeliveryAddress';
import OrdererInfo from '../../components/OrdererInfo';
import OrderSummary from '../../components/OrderSummary';
import { Button } from '../../components/UI/Button';
import Colors from '../../styles/Colors';
import { OrderWrapper } from './style';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formatPhoneNumber } from '../../utils/fomatter/formatPhoneNumber';
import { postCreateOrder } from '../../utils/api/Order/postCreateOrder';
import { setSelectedOrderSuccess } from '../../store/slice/orderSlice';
import { reformatPhoneNumber } from '../../utils/fomatter/reformatPhoneNumber';

function Order() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { price, amount, delivery_request, orderSuccess } = useSelector(
        (state: RootState) => state.order,
    );
    const { product_id } = useParams<{ product_id?: string }>();
    const userInfo = useSelector((state: RootState) => state.auth);

    const [name, setName] = useState(userInfo.name);
    const [phoneNumber, setPhoneNumber] = useState(formatPhoneNumber(userInfo.phoneNumber));

    const { address1, address2, address3 } = useSelector(
        (state: RootState) => state.deliverAddress,
    );

    const userNameChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const phoneNumberChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = formatPhoneNumber(event.target.value);
        setPhoneNumber(result);
    };

    useEffect(() => {
        if (orderSuccess) {
            alert('상품 주문이 완료되었습니다.');
            dispatch(setSelectedOrderSuccess(false));
            navigate('/', { replace: true });
        }
    }, [orderSuccess, dispatch, navigate]);

    // 'price',
    // 'name',
    // 'phoneNumber',
    // 'amount':number,
    // 'deliveryRequest',
    // 'address1',
    // 'address2',
    // 'address3',
    // 'user_id: number;'
    // 'product_id: number;'
    const postOrderHandler = () => {
        console.log(reformatPhoneNumber(phoneNumber));
        dispatch(
            postCreateOrder({
                price,
                name,
                phoneNumber: reformatPhoneNumber(phoneNumber),
                amount,
                delivery_request,
                address1,
                address2,
                address3,
                user_id: userInfo.id,
                product_id,
            }),
        );
    };

    /*  주문 넣기
    Todo 1
        데이터 보내기 전에 유효성 검사하기

    Todo 2
        api/orders에 데이터 보내기
        address1: 우편번호
        address2: 우편번호
        address3: 우편번호
        delivery_request: 배송 요청사항
        user_id: 사용자 id

    Todo 3
        api/order-details에 데이터 보내기
        amount: 주문 수량
        price: 가격 (주문 수량 * 제품 가격)
        product_id: 상품번호
        order_id: 주문번호
    */

    return (
        <OrderWrapper>
            <h1
                style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '20px 0',
                    background: `${Colors.White}`,
                }}
            >
                주문 / 결제
            </h1>
            {/* 배송지 */}
            <DeliveryAddress />
            {/* 주문자 정보 */}
            <OrdererInfo
                name={name}
                phoneNumber={phoneNumber}
                onUserNameChangehandler={userNameChangehandler}
                onPhoneNumberChangehandler={phoneNumberChangehandler}
            />
            {/* 주문 상품 정보 요약 */}
            <OrderSummary />
            <Button
                border={true}
                color={Colors.White}
                bgColor={Colors.SkyBlue}
                style={{
                    fontSize: '17px',
                    fontWeight: '800',
                    textAlign: 'center',
                }}
                onClick={postOrderHandler}
            >
                {numberWithCommas(price)}원 주문하기
            </Button>
        </OrderWrapper>
    );
}

export default Order;
