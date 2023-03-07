import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { XSymbol } from '../../icons';
import { AppDispatch } from '../../store';
import { CartsState, setSelectedAmount } from '../../store/slice/cartSlice';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';
import { Button } from '../UI/Button';
import { Flex } from '../UI/Flex';
import { CartsList } from './style';

interface CartListProps {
    carts: CartsState[];
}

function CartList({ carts }: CartListProps) {
    const dispatch = useDispatch<AppDispatch>();

    const amountChangehandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value;
        dispatch(setSelectedAmount({ value, index }));
    };

    return (
        <Fragment>
            {carts.map(
                (
                    { id, category, product_id, stored_file_name, title, amount, sell_price },
                    index,
                ) => (
                    <CartsList key={id}>
                        <Flex style={{ padding: '10px' }}>
                            <Link to={`product/${product_id}`}>
                                <Flex>
                                    <div>
                                        <img
                                            alt={title}
                                            src={`${process.env.REACT_APP_AWS_URL}${stored_file_name[0]}`}
                                            style={{ width: '80px', height: '80px' }}
                                        />
                                    </div>
                                    <div>
                                        <h1>{category}</h1>
                                        <p>배송비 40,000원 착불&nbsp;|&nbsp;업체직접배송</p>
                                    </div>
                                </Flex>
                            </Link>
                            <Button type="button" aria-label="삭제">
                                {/* Todo delete api 연결 */}
                                <XSymbol />
                            </Button>
                        </Flex>
                        <div>
                            <h2>{title}</h2>
                            <Flex>
                                <div>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(event) => amountChangehandler(event, index)}
                                    />
                                </div>
                                <p>
                                    <span>{numberWithCommas(sell_price * amount)}</span>원
                                </p>
                            </Flex>
                        </div>

                        <footer>
                            <p>배송비 착불 40,000원</p>
                        </footer>
                    </CartsList>
                ),
            )}
        </Fragment>
    );
}

export default CartList;
