import { CartsState } from '../../store/slice/cartSlice';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';

interface TotalOrderSummaryProps {
    carts: CartsState[];
}

function TotalOrderSummary({ carts }: TotalOrderSummaryProps) {
    return (
        <div>
            <div>
                <dt>총 상품금액</dt>
                <dd>
                    <span>
                        {/* prevPrice * amount */}
                        {numberWithCommas(
                            carts.reduce(
                                (acc, { prev_price, amount }) => acc + prev_price * amount,
                                0,
                            ),
                        )}
                    </span>
                    원
                </dd>
            </div>
            <div>
                <dt>총 배송비</dt>
                <dd>
                    + <span>0</span>원
                </dd>
            </div>
            <div>
                <dt>총 할인금액</dt>
                <dd>
                    -{' '}
                    <span>
                        {/* (prevPrice - sellPrice) * amount */}
                        {numberWithCommas(
                            carts.reduce(
                                (acc, { prev_price, sell_price, amount }) =>
                                    acc + (prev_price - sell_price) * amount,
                                0,
                            ),
                        )}
                    </span>
                    원
                </dd>
            </div>
            <div>
                <dt>결제금액</dt>
                <dd>
                    <span>
                        {/* sellPrice * amount */}
                        {numberWithCommas(
                            carts.reduce(
                                (acc, { sell_price, amount }) => acc + sell_price * amount,
                                0,
                            ),
                        )}
                    </span>
                    원
                </dd>
            </div>
        </div>
    );
}

export default TotalOrderSummary;
