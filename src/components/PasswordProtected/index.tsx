import { useNavigate } from 'react-router-dom';
import Colors from '../../styles/Colors';
import { getContactDetail } from '../../utils/api/Contact/getContactDedatil';
import { Button } from '../UI/Button';
import { CenterFlex } from '../UI/Flex';
import { StyledInput } from '../UI/StyledInput';
import { PasswordProtectedWrapper } from './style';

interface PasswordProtectedProps {
    password: string;
    contactId: number;
    passwordChangeHandler: InputOnChangeHandler;
}

function PasswordProtected({ password, passwordChangeHandler, contactId }: PasswordProtectedProps) {
    const navigate = useNavigate();
    const navigateCustomerCenterHandler = async () => {
        // 비밀번호 확인 후 해당 페이지로 이동하기.
        // 권한이 admin이면 그냥 이동
        const data = await getContactDetail(contactId);
        if (password === data.password)
            navigate(`/customer_center/${contactId}`, { replace: true });
        else alert('비밀번호가 틀립니다.');
    };
    return (
        <PasswordProtectedWrapper>
            <CenterFlex>
                <div style={{ marginRight: '30px' }}>비밀번호 입력</div>
                <div style={{ marginRight: '15px' }}>
                    <StyledInput
                        type="password"
                        style={{ width: '200px' }}
                        value={password}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <Button
                    bgColor={Colors.Black}
                    color={Colors.White}
                    onClick={navigateCustomerCenterHandler}
                >
                    확인
                </Button>
            </CenterFlex>
        </PasswordProtectedWrapper>
    );
}

export default PasswordProtected;
