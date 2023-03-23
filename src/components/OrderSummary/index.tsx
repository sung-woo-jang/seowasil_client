import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Colors from '../../styles/Colors';
import { getProductDetail } from '../../utils/api/Product/getProductDetail';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';
import AccordionBody from '../Accordion/AccordionBody';
import AccordionHeader from '../Accordion/AccordionHeader';
import { BetweenFlex, StartFlex } from '../UI/Flex';
import { OrderSummaryWrapper } from './style';
import { KeyboardArrowUp } from '@mui/icons-material';
import { RotateIcon } from '../UI/RotateIcon';
import { FontStyle } from '../UI/FontStyle';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { StyledInput } from '../UI/StyledInput';

function OrderSummary() {
    const { product_id } = useParams<{ product_id?: string }>();
    const [{ title, category, sellPrice, productImageUrl }, setProductData] = useState<ProductData>(
        {
            id: 0,
            title: '',
            description: '',
            sellPrice: 0,
            prevPrice: 0,
            minAmount: 0,
            category: { name: '' },
            productImageUrl: { storedFileName: [''] },
        },
    );

    const { amount } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        (async () => {
            if (product_id) {
                const data = await getProductDetail(product_id);
                setProductData(data);
            }
        })();
    }, [product_id]);

    // dispatch를 사용해서 minAmount 변경하기

    const [toggle, setToggle] = useState(true);
    const toggleHandler = () => {
        setToggle(!toggle);
    };

    return (
        <OrderSummaryWrapper>
            <AccordionHeader onClick={toggleHandler}>
                <BetweenFlex>
                    <FontStyle>주문 정보</FontStyle>
                    <RotateIcon isActive={toggle}>
                        <KeyboardArrowUp />
                    </RotateIcon>
                </BetweenFlex>
            </AccordionHeader>
            <AccordionBody isActive={toggle}>
                <section
                    style={{
                        border: `1px solid ${Colors.Gray3}`,
                        padding: '10px',
                        borderRadius: '5px',
                    }}
                >
                    <StartFlex>
                        <picture>
                            <img
                                src={`${process.env.REACT_APP_AWS_URL}${productImageUrl.storedFileName[0]}`}
                                alt={title}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    margin: '5px  10px 5px 5px',
                                }}
                            />
                        </picture>
                        <div>
                            <div style={{ marginBottom: '8px' }}>{category.name}</div>
                            <ul>
                                <li>
                                    <FontStyle
                                        style={{
                                            color: Colors.Gray2,
                                            fontWeight: '400',
                                            fontSize: '15px',
                                        }}
                                    >
                                        {title}
                                    </FontStyle>
                                </li>
                            </ul>
                            <StartFlex style={{ marginTop: '11px' }}>
                                <FontStyle>
                                    {numberWithCommas(sellPrice * Number(amount))}원
                                </FontStyle>
                                <FontStyle
                                    style={{
                                        color: Colors.Gray3,
                                        fontWeight: '400',
                                        fontSize: '15px',
                                    }}
                                >
                                    &nbsp;|&nbsp;
                                </FontStyle>
                                <FontStyle
                                    style={{
                                        color: Colors.Gray2,
                                        fontWeight: '400',
                                        fontSize: '15px',
                                    }}
                                >
                                    {amount}개
                                </FontStyle>
                            </StartFlex>
                        </div>
                    </StartFlex>
                </section>
                <section>
                    <BetweenFlex style={{ margin: '20px' }}>
                        <div style={{ width: '100px', color: Colors.Gray2 }}>계좌번호</div>
                        <StyledInput
                            type="text"
                            name="name"
                            value="농협 352-0654-1560-03 서와실농원 주민창"
                        />
                    </BetweenFlex>
                    <FontStyle style={{ color: Colors.Red }}>
                        입금자분과 주문자분의 성함이 다를 시 꼭 전화(010-6711-7892)로 알려주세요.
                        <br />
                        성함이 달라 입금확인이 안될 시 배송이 어려울 수도 있습니다.
                        <br />
                        주문하기 버튼을 눌러주시면 입금 정보가 입력하신 번호로 문자가 전송됩니다.
                    </FontStyle>
                </section>
            </AccordionBody>
        </OrderSummaryWrapper>
    );
}

export default OrderSummary;
