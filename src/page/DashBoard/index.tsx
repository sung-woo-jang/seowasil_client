import {
    BorderAll,
    QuestionAnswerOutlined,
    RemoveRedEyeOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import {
    Card,
    CardBox,
    CardHeader,
    CardName,
    CardTitle,
    DetailButton,
    Details,
    IconBox,
    Numbers,
    OrderTable,
    RecentCustomers,
    RecentCustomersTableRow,
    RecentOrders,
    TableUnderRow,
} from './style';

const cardInfo = [
    {
        id: 1,
        number: '4',
        cardName: '오늘 들어온 주문',
        icon: <BorderAll />,
    },
    { id: 2, number: '80', cardName: '등록된 상품', icon: <ShoppingCartOutlined /> },
    { id: 3, number: '14', cardName: '답변대기 문의', icon: <QuestionAnswerOutlined /> },
    { id: 4, number: '42', cardName: '방문자 수', icon: <RemoveRedEyeOutlined /> },
];

const detailList = [
    {
        id: 1,
        price: 1500,
        name: '주민창',
        payment: '결제 완료',
        // statusCode: 'pending',
        status: '배송중',
    },
    {
        id: 2,
        price: 1800,
        name: '안동민',
        payment: '결제 대기중',
        // statusCode: 'inprogress',
        status: '상품 준비중',
    },
    {
        id: 3,
        price: 30000,
        name: '이민성',
        payment: '결제 취소',
        // statusCode: 'return',
        status: '반품 완료',
    },
    {
        id: 4,
        price: 5000,
        name: '장성우',
        payment: '결제 완료',
        // statusCode: 'delivered',
        status: '배송완료',
    },
    {
        id: 5,
        price: 80000,
        name: '황성한',
        payment: '결제 완료',
        // statusCode: 'delivered',
        status: '배송완료',
    },
    {
        id: 6,
        price: 30000,
        name: '임동영',
        payment: '결제 취소',
        // statusCode: 'return',
        status: '반품 완료',
    },
    {
        id: 7,
        price: 1500,
        name: '주민창',
        payment: '결제 완료',
        // statusCode: 'pending',
        status: '배송중',
    },
    {
        id: 8,
        price: 1800,
        name: '안동민',
        payment: '결제 대기중',
        // statusCode: 'inprogress',
        status: '상품 준비중',
    },
    {
        id: 9,
        price: 30000,
        name: '이민성',
        payment: '결제 취소',
        // statusCode: 'return',
        status: '반품 완료',
    },
    {
        id: 10,
        price: 5000,
        name: '장성우',
        payment: '결제 완료',
        // statusCode: 'delivered',
        status: '배송완료',
    },
    {
        id: 11,
        price: 80000,
        name: '황성한',
        payment: '결제 완료',
        // statusCode: 'delivered',
        status: '배송완료',
    },
    {
        id: 12,
        price: 30000,
        name: '임동영',
        payment: '결제 취소',
        // statusCode: 'return',
        status: '반품 완료',
    },
];

const customers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DashBoard = () => {
    return (
        <>
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
            <Details>
                {/* order details list */}
                <RecentOrders>
                    <CardHeader className="CardHeader">
                        <CardTitle>최근 주문 내역</CardTitle>
                        <DetailButton to="/">전부 보기</DetailButton>
                    </CardHeader>
                    <OrderTable>
                        <thead>
                            <tr style={{ fontWeight: 700 }}>
                                <td>이름</td>
                                <td>결제금액</td>
                                <td>주문 상태</td>
                                <td>배송 상태</td>
                            </tr>
                        </thead>
                        <tbody>
                            {detailList.map(({ id, name, payment, status, price }) => (
                                <TableUnderRow key={id}>
                                    <td>{name}</td>
                                    <td>{price}₩</td>
                                    <td>{payment}</td>
                                    <td>
                                        <td>{status}</td>
                                    </td>
                                </TableUnderRow>
                            ))}
                        </tbody>
                    </OrderTable>
                </RecentOrders>
                {/* New Customers */}
                <RecentCustomers>
                    <CardHeader>
                        <CardTitle>최근 주문자들</CardTitle>
                    </CardHeader>
                    <table
                        style={{
                            borderCollapse: 'collapse',
                        }}
                    >
                        <tbody>
                            {customers.map((el) => (
                                <RecentCustomersTableRow key={el}>
                                    <td>
                                        <h4>
                                            주민창
                                            <br />
                                            <span>서울 도봉구</span>
                                        </h4>
                                    </td>
                                </RecentCustomersTableRow>
                            ))}
                        </tbody>
                    </table>
                </RecentCustomers>
            </Details>
        </>
    );
};

export default DashBoard;
