import { Link, useParams } from 'react-router-dom';
import Colors from '../../../styles/Colors';
import { Button } from '../../UI/Button';
import {
    LastPrice,
    NewPrice,
    ProductContent,
    ProductDetail,
    ProductPrice,
    ProductTitle,
} from './style';

interface ContentProps {
    title: string;
    description: string;
    sellPrice: number;
    prevPrice: number;
    minAmount: number;
    category: { name: string };
}

function Content({ title, description, sellPrice, prevPrice, minAmount, category }: ContentProps) {
    const params = useParams();
    return (
        <ProductContent>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>
                <span>{(((prevPrice - sellPrice) / prevPrice) * 100).toFixed()}%</span>
                <div>
                    <LastPrice>{prevPrice}원</LastPrice>
                    <NewPrice>{sellPrice}원</NewPrice>
                </div>
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
            <Link to={`/orders/${params.product_id}/checkout`} style={{ color: 'white' }}>
                <Button bgColor={Colors.Black} color={Colors.White} border={true}>
                    주문하기
                </Button>
            </Link>
            <Button border={true}>장바구니 추가</Button>
        </ProductContent>
    );
}

export default Content;
