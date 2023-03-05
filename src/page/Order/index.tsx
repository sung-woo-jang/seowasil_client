import DeliveryAddress from '../../components/DeliveryAddress';
import OrdererInfo from '../../components/OrdererInfo';
import OrderSummary from '../../components/OrderSummary';
import { Button } from '../../components/UI/Button';
import Colors from '../../styles/Colors';
import { OrderWrapper } from './style';

function Order() {
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
