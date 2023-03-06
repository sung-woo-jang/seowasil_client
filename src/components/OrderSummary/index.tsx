import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductData } from '../../hooks/useProductData';
import { Flex } from '../UI/Flex';
import { OrderSummaryWrapper } from './style';

function OrderSummary() {
    const params = useParams<{ product_id?: string }>();
    const { title, category, sellPrice, productImageUrl, minAmount } = useProductData(
        params.product_id,
    );

    // dispatch를 사용해서 minAmount 변경하기
    const [amount, setAmount] = useState<number | string>();
    useEffect(() => {
        setAmount(minAmount);
    }, [minAmount]);

    const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };
    return (
        <OrderSummaryWrapper>
            <section>
                <Flex>
                    <div>주문상품</div>
                    <div>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder="구매수량"
                            value={amount}
                            onChange={amountHandler}
                        />{' '}
                        개
                    </div>
                </Flex>
            </section>
            <div className="open expanded">
                <section>
                    <Flex>
                        <picture>
                            <img
                                src={`${process.env.REACT_APP_AWS_URL}${productImageUrl.storedFileName[0]}`}
                                alt={title}
                                style={{ width: '80px', height: '80px' }}
                            />
                        </picture>
                        <div>
                            <div>{category.name}</div>
                            <ul>
                                <li>{title}</li>
                            </ul>
                            <Flex>
                                <span>{sellPrice * 1}원</span>
                                <div>{/* | 넣는 용도 */}</div>
                                <span>00개</span>
                            </Flex>
                        </div>
                    </Flex>
                </section>
            </div>
        </OrderSummaryWrapper>
    );
}

export default OrderSummary;
