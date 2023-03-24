import {
    DetailList,
    QuestionTable,
    QuestionTableTitle,
    CardHeader,
    CardTitle,
    RecentOrders,
} from './style';

import { useEffect, useState } from 'react';
import { getContacts } from '../../utils/api/Contact/getContatcs';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import PasswordProtected from '../PasswordProtected';

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

    const [password, setPassword] = useState<string>('');
    const passwordChangeHandler: InputOnChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const [toggle, setToggle] = useState(false);
    const [contactId, setContactId] = useState(0);
    const toggleHandler = (id: number) => {
        setContactId(id);
        setToggle(!toggle);
    };

    return (
        <RecentOrders>
            <CardHeader>
                <CardTitle>문의 내역</CardTitle>
                <Button border={true}>
                    <Link to="/customer_center/write">글쓰기</Link>
                </Button>
            </CardHeader>
            {toggle ? (
                <PasswordProtected
                    contactId={contactId}
                    password={password}
                    passwordChangeHandler={passwordChangeHandler}
                />
            ) : (
                <QuestionTable>
                    <QuestionTableTitle>
                        <span>번호</span>
                        <span>카테고리</span>
                        <span>제목</span>
                        <span>글쓴이</span>
                    </QuestionTableTitle>
                    {contacts.map(({ id, category, name, title }) => (
                        <DetailList key={id} onClick={() => toggleHandler(id)}>
                            <span>{id}</span>
                            <span>{category}</span>
                            <span>{title}</span>
                            <span>{name}</span>
                        </DetailList>
                    ))}
                </QuestionTable>
            )}
        </RecentOrders>
    );
}

export default CustomerCenter;
