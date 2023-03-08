import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store';
import { setSelectedOrder } from '../../../store/slice/orderSlice';
import Colors from '../../../styles/Colors';
import { fetchCreateCartThunk } from '../../../utils/api/Cart/postCreateCart';
import { numberWithCommas } from '../../../utils/fomatter/numberWithCommas';
import { Button } from '../../UI/Button';
import { StartFlex } from '../../UI/Flex';
import {
    PrevPrice,
    SellPrice,
    ProductContent,
    ProductDetail,
    ProductPrice,
    ProductTitle,
} from './style';

interface ContentProps {
    productData: ProductData;
}

function Content({ productData }: ContentProps) {
    const { product_id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useSelector((state: RootState) => state.auth);
    const { address1, address2, address3, user_id } = useSelector(
        (state: RootState) => state.deliverAddress,
    );

    const { category, description, minAmount, prevPrice, sellPrice, title } = productData;

    const [amount, setAmount] = useState<number | string>(0);
    useEffect(() => {
        setAmount(minAmount);
    }, [minAmount]);

    const amountChangeHandler: InputOnChangeHandler = (e) => {
        setAmount(e.target.value);
    };

    // 주문하기
    const navigateToOrderPageHandler = () => {
        if (amount >= minAmount) {
            dispatch(
                setSelectedOrder({
                    address1,
                    address2,
                    address3,
                    amount,
                    price: +amount * sellPrice,
                    user_id,
                    product_id,
                }),
            );
            navigate(`/orders/${product_id}/checkout`);
        } else alert(`최소 ${minAmount}개부터 구매가 가능합니다.`);
    };

    // 장바구니 추가
    const addCartItemHandler = () => {
        if (amount < minAmount) alert(`최소 ${minAmount}개부터 구매가 가능합니다.`);

        if (product_id) dispatch(fetchCreateCartThunk({ amount, product_id, user_id: id }));
    };

    return (
        <ProductContent>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>
                <StartFlex style={{ flexDirection: 'row' }}>
                    <span style={{ color: Colors.Gray1 }}>
                        {(((prevPrice - sellPrice) / prevPrice) * 100).toFixed()}%
                    </span>
                    <PrevPrice>&nbsp;&nbsp;{prevPrice}원</PrevPrice>
                </StartFlex>
                <SellPrice>
                    {numberWithCommas(sellPrice)}
                    <span> 원</span>
                </SellPrice>
            </ProductPrice>
            <ProductDetail>
                <span>
                    카테고리:&nbsp;<h2>{category.name}</h2>
                </span>
                <p>{description}</p>
                <ul>
                    <li>
                        과명: <span>ㅇㅇ나무과</span>
                    </li>
                    <li>
                        최소 주문 수량: <span>{minAmount}개</span>
                    </li>
                    <li>
                        기타: <span>등등</span>
                    </li>
                </ul>
            </ProductDetail>
            <div>
                <input type="number" value={amount} onChange={amountChangeHandler} />
            </div>
            <div>
                <Button
                    bgColor={Colors.Black}
                    color={Colors.White}
                    border={true}
                    onClick={navigateToOrderPageHandler}
                >
                    주문하기
                </Button>
                <Button border={true} onClick={addCartItemHandler}>
                    장바구니 추가
                </Button>
            </div>
        </ProductContent>
    );
}

export default Content;
