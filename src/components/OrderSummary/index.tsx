import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../utils/api/Product/getProductDetail';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';
import { Flex } from '../UI/Flex';
import { OrderSummaryWrapper } from './style';

function OrderSummary() {
    const params = useParams<{ product_id?: string }>();
    const [{ title, category, sellPrice, productImageUrl, minAmount }, setProductData] =
        useState<ProductData>({
            id: 0,
            title: '',
            description: '',
            sellPrice: 0,
            prevPrice: 0,
            minAmount: 0,
            category: { name: '' },
            productImageUrl: { storedFileName: [''] },
        });

    useEffect(() => {
        (async () => {
            if (params.product_id) {
                const data = await getProductDetail(params.product_id);
                setProductData(data);
            }
        })();
    }, [params.product_id]);

    // dispatch를 사용해서 minAmount 변경하기
    const [amount, setAmount] = useState<number | string>(0);
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
                                <span>{numberWithCommas(sellPrice * Number(amount))}원</span>
                            </Flex>
                        </div>
                    </Flex>
                </section>
            </div>
        </OrderSummaryWrapper>
    );
}

export default OrderSummary;
