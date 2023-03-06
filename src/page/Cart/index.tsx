import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../../components/CartList';
import TotalOrderSummary from '../../components/TotalOrderSummary';
import { Button } from '../../components/UI/Button';
import { Grid } from '../../components/UI/Grid';
import { AppDispatch, RootState } from '../../store';
import Colors from '../../styles/Colors';
import { getCartByUserAsyncThunk } from '../../utils/api/Cart/getCartByUser';
import { CartWrapper } from './style';

function Cart() {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useSelector((state: RootState) => state.auth);
    const carts = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        dispatch(getCartByUserAsyncThunk(id));
    }, [id, dispatch]);

    return (
        <CartWrapper>
            <ul>
                <Grid className="grid">
                    <CartList carts={carts} />
                </Grid>
            </ul>
            {/* 총 구매액 요약 */}
            <TotalOrderSummary carts={carts} />
            <Grid>
                <Button bgColor={Colors.SkyBlue} type="button">
                    n개 상품 구매하기
                </Button>
            </Grid>
        </CartWrapper>
    );
}

export default Cart;
