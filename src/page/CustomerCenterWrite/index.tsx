import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextArea } from '../../components/UI/TextArea';
import { postCreateContact } from '../../utils/api/postCreateContact';
import { Actions, Control, Section } from './style';

function CustomerCenterWrite() {
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const navigate = useNavigate();

    const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nameRef.current && passwordRef.current && titleRef.current && descriptionRef.current) {
            const result = await postCreateContact({
                name: nameRef.current.value,
                password: passwordRef.current.value,
                title: titleRef.current.value,
                description: descriptionRef.current.value,
            });
            if (typeof result.id === 'number') navigate('/customer_center', { replace: true });
        }
    };

    return (
        <>
            <h1>1:1 친절 상담</h1>
            <Section>
                <form onSubmit={formSubmitHandler}>
                    <Control>
                        <label htmlFor="name">이름</label>
                        <input type="text" ref={nameRef} id="name" required />
                    </Control>
                    <Control>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" ref={passwordRef} id="password" required />
                    </Control>
                    <Control>
                        <label htmlFor="title">제목</label>
                        <input type="text" ref={titleRef} id="title" required />
                    </Control>
                    <Control>
                        <label htmlFor="description">문의 내용</label>
                        <TextArea ref={descriptionRef} id="description" />
                    </Control>
                    <Actions>
                        <button type="submit">문의하기</button>
                    </Actions>
                </form>
            </Section>
        </>
    );
}

export default CustomerCenterWrite;
