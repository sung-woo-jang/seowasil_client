import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { postCreateNotice } from '../../utils/api/Notice/postCreateNotice';
import { Button } from '../UI/Button';
import { StyledTextArea } from '../UI/StyledInput';
import { Actions, Control, Section } from './style';

function NoticeWrite() {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const navigate = useNavigate();

    const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (titleRef.current && descriptionRef.current) {
            const result = await postCreateNotice({
                title: titleRef.current.value,
                description: descriptionRef.current.value,
            });
            // 성공여부 판단 Demo
            if (typeof result.id === 'number') navigate('/notice', { replace: true });
        }
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <Section>
                <Control>
                    <label htmlFor="title">제목</label>
                    <input type="text" ref={titleRef} id="title" required />
                </Control>

                <Control>
                    <label htmlFor="description">공지 내용</label>
                    <StyledTextArea ref={descriptionRef} id="description" />
                </Control>

                <Actions>
                    <Button border={true} type="submit">
                        등록하기
                    </Button>
                </Actions>
            </Section>
        </form>
    );
}

export default NoticeWrite;
