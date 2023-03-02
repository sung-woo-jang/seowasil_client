import { useState } from 'react';
import { Accordion, ContentBox, QuestionTable, Label, Content } from './style';

function Notice() {
    const [isActive, setIsActice] = useState(false);
    return (
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
                            공지사항 내용. 대충 뭐 배송 관련, 주문 관련, 상담 관련 등등 이것저것을
                            써 놓는 공간
                        </p>
                    </Content>
                </ContentBox>
            </Accordion>
        </QuestionTable>
    );
}

export default Notice;
