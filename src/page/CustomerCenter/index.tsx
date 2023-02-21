import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Button';
import { getContacts } from '../../utils/api/getContatcs';

import {
    CardHeader,
    CardTitle,
    DetailList,
    Details,
    QuestionTable,
    QuestionTableTitle,
    RecentOrders,
} from './style';

interface contactData {
    id: number;
    title: string;
    name: string;
    category: string;
}

function CustomerCenter() {
    const [contacts, setContacts] = useState<contactData[]>([
        {
            id: 0,
            title: '',
            name: '',
            category: '',
        },
    ]);

    useEffect(() => {
        (async () => {
            const data = await getContacts();
            setContacts(data);
        })();
    }, []);
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
                        <span>제목</span>
                        <span>글쓴이</span>
                    </QuestionTableTitle>
                    <div>
                        {contacts.map(({ id, category, name, title }) => (
                            <DetailList to={`/customer_center/${id}`} key={id}>
                                <span>{id}</span>
                                <span>{category}</span>
                                <span>{title}</span>
                                <span>{name}</span>
                            </DetailList>
                        ))}
                    </div>
                </QuestionTable>
            </RecentOrders>
        </Details>
    );
}

export default CustomerCenter;
