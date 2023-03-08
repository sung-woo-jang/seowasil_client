import { Fragment, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/UI/Button';
import { BetweenFlex } from '../../../components/UI/Flex';
import { FontStyle } from '../../../components/UI/FontStyle';
import { StyledInput, StyledTextArea } from '../../../components/UI/StyledInput';
import { RootState } from '../../../store';
import { postCreateContact } from '../../../utils/api/Contact/postCreateContact';
import { Actions, Section } from './style';

function CustomerCenterWrite() {
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const navigate = useNavigate();

    const { isLogin, name } = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        if (isLogin && nameRef.current) nameRef.current.value = name;
    }, [isLogin, name]);

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
        <Fragment>
            <FontStyle style={{ fontWeight: 800, fontSize: 25 }}>1:1 친절 상담</FontStyle>
            <form onSubmit={formSubmitHandler}>
                <Section>
                    <select name="category" style={{ width: '100px' }}>
                        {categories.map(({ id, title }, index) => (
                            <option value={title} key={id}>
                                {title}
                            </option>
                        ))}
                    </select>
                    <BetweenFlex>
                        <label style={{ width: '100px' }} htmlFor="title">
                            제목
                        </label>
                        <StyledInput type="text" ref={titleRef} id="title" required />
                    </BetweenFlex>
                    <BetweenFlex>
                        <label style={{ width: '100px' }} htmlFor="name">
                            이름
                        </label>
                        <StyledInput type="text" ref={nameRef} id="name" required />
                    </BetweenFlex>
                    <BetweenFlex>
                        <label style={{ width: '100px' }} htmlFor="description">
                            문의 내용
                        </label>
                        <StyledTextArea ref={descriptionRef} id="description" />
                    </BetweenFlex>
                    <BetweenFlex>
                        <label style={{ width: '100px' }} htmlFor="password">
                            비밀번호
                        </label>
                        <StyledInput type="password" ref={passwordRef} id="password" required />
                    </BetweenFlex>
                    <Actions>
                        <Button border={true} type="submit">
                            문의하기
                        </Button>
                    </Actions>
                </Section>
            </form>
        </Fragment>
    );
}

export default CustomerCenterWrite;
