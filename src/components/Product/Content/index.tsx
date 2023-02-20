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
    return (
        <ProductContent>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>
                <LastPrice>
                    이전 가격: <span>{prevPrice}원</span>
                </LastPrice>
                <NewPrice>
                    현재 가격:
                    <span>
                        {sellPrice}원 (-
                        {prevPrice - sellPrice}원)
                    </span>
                </NewPrice>
            </ProductPrice>
            <ProductDetail>
                <h2>나무 종류: {category.name}</h2>
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
        </ProductContent>
    );
}

export default Content;
