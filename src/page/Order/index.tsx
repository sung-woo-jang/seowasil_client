import DeliveryAddress from '../../components/DeliveryAddress';
import OrdererInfo from '../../components/OrdererInfo';
import OrderSummary from '../../components/OrderSummary';
import { Button } from '../../components/UI/Button';
import Colors from '../../styles/Colors';
import { OrderWrapper } from './style';

function Order() {
    /* 초기 세팅
    Todo
    1. 주문 관련 정보 가져오기
    2. 주문 정보 변경하는 dispatch들 생성
    3. 
*/
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
