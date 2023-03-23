import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DeliveryAddress from '../../components/DeliveryAddress';
import OrdererInfo from '../../components/OrdererInfo';
import OrderSummary from '../../components/OrderSummary';
import { Button } from '../../components/UI/Button';
import Colors from '../../styles/Colors';
import { OrderWrapper } from './style';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Order() {
    const { price, name, phoneNumber, amount, delivery_request } = useSelector(
        (state: RootState) => state.order,
    );
    const { product_id } = useParams<{ product_id?: string }>();
    const { id: user_id } = useSelector((state: RootState) => state.auth);

    const { address1, address2, address3 } = useSelector(
        (state: RootState) => state.deliverAddress,
    );
    console.log(product_id, user_id);

    const postOrderHandler = () => {};
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
    const navigate = useNavigate();
    useEffect(() => {
        if (price === 0) navigate('/');
    });

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
            <OrdererInfo />
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
            >
                {numberWithCommas(price)}원 주문하기
            </Button>
        </OrderWrapper>
    );
}

export default Order;
