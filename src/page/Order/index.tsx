import DeliveryAddress from '../../components/DeliveryAddress';
import OrdererInfo from '../../components/OrdererInfo';
import OrderSummary from '../../components/OrderSummary';
import { Button } from '../../components/UI/Button';
import Colors from '../../styles/Colors';
import { OrderWrapper } from './style';

function Order() {
    /*  
    Todo 1
        api/orders에 데이터 보내기
        address1: 우편번호
        address2: 우편번호
        address3: 우편번호
        delivery_request: 배송 요청사항
        user_id: 사용자 id

    Todo 2
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
            <DeliveryAddress />
            <OrdererInfo />
            <OrderSummary />
            <Button border={true} color={Colors.White} bgColor={Colors.SkyBlue}>
                00,000원 주문하기
            </Button>
        </OrderWrapper>
    );
}

export default Order;
