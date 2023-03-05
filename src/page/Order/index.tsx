import DeliveryAddress from '../../components/DeliveryAddress';
import OrdererInfo from '../../components/OrdererInfo';
import OrderSummary from '../../components/OrderSummary';
import { Button } from '../../components/UI/Button';

function Order() {
    return (
        <main>
            <h1>주문 / 결제</h1>
            <DeliveryAddress />
            <OrdererInfo />
            <OrderSummary />
            <Button border={true}>00,000원 주문하기</Button>
        </main>
    );
}

export default Order;
