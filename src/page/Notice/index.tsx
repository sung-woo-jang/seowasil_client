import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Button';
import {
    Accordion,
    CardHeader,
    CardTitle,
    Content,
    ContentBox,
    Details,
    Label,
    QuestionTable,
    RecentOrders,
} from './style';

const Notice = () => {
    const [isActive, setIsActice] = useState(false);
    return (
        <Details>
            <RecentOrders>
                <CardHeader>
                    <CardTitle>공지 사항</CardTitle>
                    <Button border={true}>
                        <Link to="/customer_center/write">글쓰기</Link>
                    </Button>
                </CardHeader>

                <QuestionTable>
                    <Accordion>
                        <ContentBox
                            onClick={() => {
                                setIsActice(!isActive);
                            }}
                        >
                            <Label isActive={isActive}>공지사항 제목</Label>
                            <Content isActive={isActive}>
                                <p>
                                    공지사항 내용. 대충 뭐 배송 관련, 주문 관련, 상담 관련 등등
                                    이것저것을 써 놓는 공간
                                </p>
                            </Content>
                        </ContentBox>
                    </Accordion>
                </QuestionTable>
            </RecentOrders>
        </Details>
    );
};

export default Notice;
