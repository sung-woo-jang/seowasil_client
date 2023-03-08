import Colors from '../../styles/Colors';
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
    const navigateCustomerCenterHandler = () => {};
    return (
        <PasswordProtectedWrapper>
            <CenterFlex>
                <div style={{ marginRight: '30px' }}>비밀번호 입력</div>
                <div style={{ marginRight: '15px' }}>
                    <StyledInput
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
