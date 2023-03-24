import {
    BorderAll,
    QuestionAnswerOutlined,
    RemoveRedEyeOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import { Fragment, useEffect, useState } from 'react';
import { Button } from '../../components/UI/Button';
import { BetweenFlex } from '../../components/UI/Flex';
import { getOrderList, OrderList } from '../../utils/api/Order/getOrderList';
import { formatPhoneNumber } from '../../utils/fomatter/formatPhoneNumber';
import { numberWithCommas } from '../../utils/fomatter/numberWithCommas';
import {
    Card,
    CardBox,
    CardHeader,
    CardName,
    CardTitle,
    Details,
    IconBox,
    Numbers,
    TableContents,
} from './style';

const cardInfo = [
    {
        id: 1,
        number: '4',
        cardName: '(임시)오늘 들어온 주문',
        icon: <BorderAll />,
    },
    { id: 2, number: '80', cardName: '(임시)등록된 상품', icon: <ShoppingCartOutlined /> },
    { id: 3, number: '14', cardName: '(임시)답변대기 문의', icon: <QuestionAnswerOutlined /> },
    { id: 4, number: '42', cardName: '(임시)방문자 수', icon: <RemoveRedEyeOutlined /> },
];

const DashBoard = () => {
    const [orderList, setOrderList] = useState<OrderList[]>([
        {
            id: 0,
            name: '',
            phoneNumber: '',
            deliveryRequest: '',
            address1: '',
            address2: '',
            address3: '',
            amount: '',
            price: '',
            product: { title: '' },
        },
    ]);
    useEffect(() => {
        (async () => {
            const data = await getOrderList();
            setOrderList(data);
        })();
    }, []);

    return (
        <Fragment>
            <CardBox>
                {cardInfo.map(({ id, cardName, icon, number }) => (
                    <Card key={id}>
                        <div>
                            <Numbers>{number}</Numbers>
                            <CardName>{cardName}</CardName>
                        </div>
                        <IconBox>{icon}</IconBox>
                    </Card>
                ))}
            </CardBox>
            <Details className="Details">
                {/* order details list */}
                <div>
                    <CardHeader>
                        <CardTitle>최근 주문 내역</CardTitle>
                        <Button border={true}>전부 보기</Button>
                    </CardHeader>
                    <BetweenFlex
                        style={{
                            fontWeight: 700,
                            margin: '20px 0 10px 0',
                            paddingBottom: '10px',
                            borderBottom: '2px solid black',
                        }}
                    >
                        <TableContents>이름</TableContents>
                        <TableContents>전화번호</TableContents>
                        <TableContents>배송 요청 사항</TableContents>
                        <TableContents>주소</TableContents>
                        <TableContents>주문 수량</TableContents>
                        <TableContents>결제 금액</TableContents>
                        <TableContents>상품명</TableContents>
                        <TableContents>결제 상태</TableContents>
                    </BetweenFlex>
                    {orderList.map(
                        ({
                            id,
                            name,
                            phoneNumber,
                            deliveryRequest,
                            address1,
                            address2,
                            address3,
                            amount,
                            price,
                            product,
                        }) => (
                            <BetweenFlex
                                key={id}
                                style={{
                                    marginBottom: '10px',
                                    paddingBottom: '10px',
                                    borderBottom: '1px solid black',
                                }}
                            >
                                <TableContents>{name}</TableContents>
                                <TableContents>{formatPhoneNumber(phoneNumber)}</TableContents>
                                <TableContents>{deliveryRequest}</TableContents>
                                <TableContents>{`(${address1}) ${address2} ${address3}`}</TableContents>
                                <TableContents>{amount}</TableContents>
                                <TableContents>{numberWithCommas(price)}원</TableContents>
                                <TableContents>{product.title}</TableContents>
                                <TableContents>입금 대기중</TableContents>
                            </BetweenFlex>
                        ),
                    )}
                </div>
            </Details>
        </Fragment>
    );
};

export default DashBoard;
