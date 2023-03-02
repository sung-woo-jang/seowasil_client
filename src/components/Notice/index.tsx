import { useEffect, useState } from 'react';
import { getNotices, responseNotices } from '../../utils/api/Notice/getNotices';
import { Accordion, ContentBox, QuestionTable, Label, Content } from './style';

function Notice() {
    const [notices, setNotices] = useState<responseNotices[]>([]);
    const [completedIds, setCompletedIds] = useState<number[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getNotices();
            setNotices(data);
        })();
    }, []);

    const handleToggle = (id: number) => {
        if (completedIds.includes(id)) {
            setCompletedIds(completedIds.filter((completedId) => completedId !== id));
        } else {
            setCompletedIds([...completedIds, id]);
        }
    };

    return (
        <QuestionTable>
            <Accordion>
                {notices.map(({ id, title, description }) => (
                    <ContentBox
                        key={id}
                        onClick={() => {
                            handleToggle(id);
                        }}
                    >
                        <Label isActive={completedIds.includes(id) ? true : false}>{title}</Label>
                        <Content isActive={completedIds.includes(id) ? true : false}>
                            <p>{description}</p>
                        </Content>
                    </ContentBox>
                ))}
            </Accordion>
        </QuestionTable>
    );
}

export default Notice;
