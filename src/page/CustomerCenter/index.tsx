import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import {
    CardHeader,
    CardTitle,
    DetailList,
    Details,
    QuestionTable,
    QuestionTableTitle,
    RecentOrders,
} from './style';

const detailList = [
    {
        id: 1,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '문그로우',
        name: '주민창',
        payment: '결제 완료',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 2,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '파스티기아타',
        name: '안동민',
        payment: '결제 대기중',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 3,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '에메랄드 그린',
        name: '이민성',
        payment: '결제 취소',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 4,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '에메랄드 골드',
        name: '장성우',
        payment: '결제 완료',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 5,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '블루엔젤',
        name: '황성한',
        payment: '결제 완료',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 6,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '블루애로우',
        name: '임동영',
        payment: '결제 취소',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 7,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '황금주목',
        name: '주민창',
        payment: '결제 완료',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 8,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '스카이로켓',
        name: '안동민',
        payment: '결제 대기중',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 9,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '히버니카',
        name: '이민성',
        payment: '결제 취소',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 10,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '문그로우',
        name: '장성우',
        payment: '결제 완료',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 11,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '히버니카',
        name: '황성한',
        payment: '결제 완료',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
    {
        id: 12,
        product: 'ㅇㅇ나무 ㅁ년생',
        category: '블루엔젤',
        name: '임동영',
        payment: '결제 취소',
        title: 'ㅇㅇ관련해서 문의드려요.',
    },
];

const CustomerCenter = () => {
    return (
        <Details>
            <RecentOrders>
                <CardHeader>
                    <CardTitle>문의 내역</CardTitle>
                    <Button>
                        <Link to="/customer_center/write">글쓰기</Link>
                    </Button>
                </CardHeader>

                <QuestionTable>
                    <QuestionTableTitle>
                        <span>번호</span>
                        <span>카테고리</span>
                        <span>상품</span>
                        <span>제목</span>
                        <span>글쓴이</span>
                    </QuestionTableTitle>
                    <div>
                        {detailList.map(({ id, category, name, title, product }) => (
                            <DetailList to="/" key={id}>
                                <span>{id}</span>
                                <span>{category}</span>
                                <span>{product}</span>
                                <span>{title}</span>
                                <span>{name}</span>
                            </DetailList>
                        ))}
                    </div>
                </QuestionTable>
            </RecentOrders>
        </Details>
    );
};

export default CustomerCenter;
