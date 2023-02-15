import Button from '../../components/Button';
import { Actions, Control, Section } from './style';

function CustomerCenterWrite() {
    return (
        <>
            <h1>1:1 친절 상담</h1>
            <Section>
                <form>
                    <Control>
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" required />
                    </Control>
                    <Control>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" required />
                    </Control>
                    <Control>
                        <label htmlFor="title">제목</label>
                        <input type="text" id="title" required />
                    </Control>
                    <Control>
                        <label htmlFor="description">문의 내용</label>
                        <input type="text" id="description" required />
                    </Control>
                    <Actions>
                        <button>문의하기</button>
                    </Actions>
                </form>
            </Section>
        </>
    );
}

export default CustomerCenterWrite;
