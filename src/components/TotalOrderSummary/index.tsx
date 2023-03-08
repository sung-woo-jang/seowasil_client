import { CartsState } from '../../store/slice/cartSlice';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';

interface TotalOrderSummaryProps {
    carts: CartsState[];
}

function TotalOrderSummary({ carts }: TotalOrderSummaryProps) {
    return (
        <div>
            <div>총 상품금액</div>
            <span>
                {/* prevPrice * amount */}
                {numberWithCommas(
                    carts.reduce(
                        (acc, { prev_price, amount, is_selected }) =>
                            is_selected ? acc + prev_price * amount : acc,
                        0,
                    ),
                )}
                원
            </span>
            <div>총 배송비</div>
            <span>+ 0 원</span>
            <div>총 할인금액</div>
            <span>
                -
                {numberWithCommas(
                    carts.reduce(
                        (acc, { prev_price, sell_price, amount, is_selected }) =>
                            is_selected ? acc + (prev_price - sell_price) * amount : acc,
                        0,
                    ),
                )}
                원
            </span>
            <div>결제금액</div>
            <span>
                {/* sellPrice * amount */}
                {numberWithCommas(
                    carts.reduce(
                        (acc, { sell_price, amount, is_selected }) =>
                            is_selected ? acc + sell_price * amount : acc,
                        0,
                    ),
                )}
                원
            </span>
        </div>
    );
}

export default TotalOrderSummary;
