import { Checkbox } from '@mui/material';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { XSymbol } from '../../icons';
import { AppDispatch, RootState } from '../../store';
import { CartsState, setIsSelected, setSelectedAmount } from '../../store/slice/cartSlice';
import { fetchDeleteCartThunk } from '../../utils/api/Cart/deleteCart';
import { getCartByUserAsyncThunk } from '../../utils/api/Cart/getCartByUser';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';
import { Button } from '../UI/Button';
import { BetweenFlex, StartFlex } from '../UI/Flex';
import { CartsList } from './style';

interface CartListProps {
    carts: CartsState[];
}

function CartList({ carts }: CartListProps) {
    const dispatch = useDispatch<AppDispatch>();
    const { id: user_id } = useSelector((state: RootState) => state.auth);

    const amountChangehandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value;
        dispatch(setSelectedAmount({ value, index }));
    };

    const deleteCartItemHandler = (id: number) => {
        dispatch(fetchDeleteCartThunk(id)).then(() => dispatch(getCartByUserAsyncThunk(user_id)));
    };

    const isSelectedHandler = (index: number) => {
        console.log(index);
        dispatch(setIsSelected(index));
    };

    return (
        <Fragment>
            {carts.map(
                (
                    {
                        id,
                        category,
                        product_id,
                        stored_file_name,
                        title,
                        amount,
                        sell_price,
                        is_selected,
                    },
                    index,
                ) => (
                    <CartsList key={id}>
                        <BetweenFlex style={{ padding: '10px' }}>
                            <StartFlex>
                                <Checkbox
                                    checked={is_selected}
                                    onClick={() => isSelectedHandler(index)}
                                />

                                <Link to={`product/${product_id}`}>
                                    <BetweenFlex>
                                        <div>
                                            <img
                                                alt={title}
                                                src={`${process.env.REACT_APP_AWS_URL}${stored_file_name[0]}`}
                                                style={{ width: '80px', height: '80px' }}
                                            />
                                        </div>
                                        <div>
                                            <h1>{category}</h1>
                                            <p>????????? 40,000??? ??????&nbsp;|&nbsp;??????????????????</p>
                                        </div>
                                    </BetweenFlex>
                                </Link>
                            </StartFlex>
                            <Button
                                type="button"
                                aria-label="??????"
                                style={{ minWidth: '30px' }}
                                onClick={() => {
                                    deleteCartItemHandler(id);
                                }}
                            >
                                {/* Todo delete api ?????? */}
                                <XSymbol />
                            </Button>
                        </BetweenFlex>
                        <div>
                            <h2>{title}</h2>
                            <BetweenFlex>
                                <div>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(event) => amountChangehandler(event, index)}
                                    />
                                </div>
                                <p>
                                    <span>{numberWithCommas(sell_price * amount)}</span>???
                                </p>
                            </BetweenFlex>
                        </div>

                        <footer>
                            <p>????????? ?????? 40,000???</p>
                        </footer>
                    </CartsList>
                ),
            )}
        </Fragment>
    );
}

export default CartList;
