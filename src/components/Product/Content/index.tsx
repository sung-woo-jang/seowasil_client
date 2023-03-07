import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Colors from '../../../styles/Colors';
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
    const params = useParams();
    const navigate = useNavigate();

    const { category, description, minAmount, prevPrice, sellPrice, title } = productData;

    const amountRef = useRef<HTMLInputElement>(null);

    const navigateToOrderPageHandler = () => {
        if (Number(amountRef.current?.value) >= minAmount) {
            navigate(`/orders/${params.product_id}/checkout`);
        } else alert(`최소 ${minAmount}개부터 구매가 가능합니다.`);
    };
    /* 
    Todo
        1. 주문에 필요한 정보 관리하는 dispatch 생성
        2. dispatch함수에 정보 입력
        3. 정보 입력 후 상품페이지로 이동
    */

    return (
        <ProductContent>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>
                <StartFlex style={{ flexDirection: 'row' }}>
                    <span style={{ color: Colors.Gray1 }}>
                        {(((prevPrice - sellPrice) / prevPrice) * 100).toFixed()}%
                    </span>
                    <PrevPrice>{prevPrice}원</PrevPrice>
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
                <input type="number" ref={amountRef} defaultValue={1} />
            </div>
            <div>
                <Button
                    bgColor={Colors.Black}
                    color={Colors.White}
                    border={true}
                    onClick={navigateToOrderPageHandler}
                >
                    {/* <Link to={`/orders/${params.product_id}/checkout`} style={{ color: 'white' }}> */}
                    주문하기
                    {/* </Link> */}
                </Button>
                <Button border={true}>장바구니 추가</Button>
            </div>
        </ProductContent>
    );
}

export default Content;
