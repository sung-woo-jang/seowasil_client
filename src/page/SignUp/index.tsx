import { Actions, Control, Section } from './style';

export default function SignUp() {
    return (
        <Section>
            <form>
                <Control>
                    <label htmlFor="account">계정</label>
                    <input type="text" id="account" required />
                </Control>
                <Control>
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" required />
                </Control>
                <Control>
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" required />
                </Control>
                <Actions>
                    <button>회원가입</button>
                </Actions>
            </form>
        </Section>
    );
}
