import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/UI/Button';
import { TextArea } from '../../../components/UI/TextArea';
import { postCreateContact } from '../../../utils/api/postCreateContact';
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
            // 성공여부 판단 Demo
            if (typeof result.id === 'number') navigate('/customer_center', { replace: true });
        }
    };
    const categories = [
        { id: 1, title: '상품문의' },
        { id: 2, title: '배송문의' },
        { id: 3, title: '기타문의' },
    ];

    return (
        <>
            <h1>1:1 친절 상담</h1>
            <form onSubmit={formSubmitHandler}>
                <Section>
                    <Control>
                        <select name="category">
                            {categories.map(({ id, title }, index) => (
                                <option value={title} key={id}>
                                    {title}
                                </option>
                            ))}
                        </select>
                    </Control>
                    <Control>
                        <label htmlFor="title">제목</label>
                        <input type="text" ref={titleRef} id="title" required />
                    </Control>
                    <Control>
                        <label htmlFor="name">이름</label>
                        <input type="text" ref={nameRef} id="name" required />
                    </Control>
                    <Control>
                        <label htmlFor="description">문의 내용</label>
                        <TextArea ref={descriptionRef} id="description" />
                    </Control>
                    <Control></Control>
                    <Control>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" ref={passwordRef} id="password" required />
                    </Control>
                    <Actions>
                        <Button border={true} type="submit">
                            문의하기
                        </Button>
                    </Actions>
                </Section>
            </form>
        </>
    );
}

export default CustomerCenterWrite;
