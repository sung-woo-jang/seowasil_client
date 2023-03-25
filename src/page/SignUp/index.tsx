import { Actions, Control, Section } from './style';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useEffect, useState } from 'react';
import { Button } from '../../components/UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { asyncSignUpFetch, setSelectedIsRegistCompleted } from '../../store/slice/authSlice';
import Colors from '../../styles/Colors';

export default function SignUp() {
    const [userInfo, setUserInfo] = useState({
        account: '', // 계정
        password: '', // 비밀번호
        name: '', // 이름
        phoneNumber: '', // 전화번호
        email: '', // 이메일
    });

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [addressInfo, setAddressInfo] = useState({
        address1: '', // 우편번호
        address2: '', // 주소
        address3: '', // 상세주소
    });
    const open = useDaumPostcodePopup();

    const handleComplete = (data: Address) => {
        let address2 = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            address2 += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        setAddressInfo((prevState) => {
            return { ...prevState, address1: data.zonecode, address2 };
        });
    };

    const searchAddressHandler = () => {
        open({ onComplete: handleComplete });
    };

    // 회원가입 관련 State
    const { isLogin, isRegistCompleted } = useSelector((state: RootState) => state.auth);

    const {
        addressDetailInputHandler,
        accountInputHandler,
        emailInputHandler,
        nameInputHandler,
        passwordInputHandler,
        phoneNumberInputHandler,
    } = {
        // 계정
        accountInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
            setUserInfo((prevState) => {
                return { ...prevState, account: e.target.value };
            });
        },
        // 비밀번호
        passwordInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
            setUserInfo((prevState) => {
                return { ...prevState, password: e.target.value };
            });
        },

        // 이름
        nameInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
            setUserInfo((prevState) => {
                return { ...prevState, name: e.target.value };
            });
        },

        // 전화번호
        phoneNumberInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
            setUserInfo((prevState) => {
                return { ...prevState, phoneNumber: e.target.value };
            });
        },

        // 이메일
        emailInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
            setUserInfo((prevState) => {
                return { ...prevState, email: e.target.value };
            });
        },

        // 상세주소
        addressDetailInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
            setAddressInfo((prevState) => {
                return { ...prevState, address3: e.target.value };
            });
        },
    };

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        const { address1, address2, address3 } = addressInfo;
        e.preventDefault();

        // 하나 이상의 입력 필드가 비어있으면 alert을 띄우고 회원가입을 시도하지 않음
        if (
            !userInfo.account ||
            !userInfo.password ||
            !userInfo.name ||
            !userInfo.phoneNumber ||
            !userInfo.email ||
            !address1 ||
            !address2 ||
            !address3
        ) {
            let message = '다음 필드를 입력해주세요:\n';
            if (!userInfo.account) message += '계정\n';
            if (!userInfo.password) message += '비밀번호\n';
            if (!userInfo.name) message += '이름\n';
            if (!userInfo.phoneNumber) message += '전화번호\n';
            if (!address1) message += '우편번호\n';
            if (!address2) message += '주소\n';
            if (!address3) message += '상세주소\n';
            alert(message);
            return;
        }

        dispatch(asyncSignUpFetch({ ...userInfo, address1, address2, address3 }));
    };

    // 로그인이 되어있거나 회원가입 완료 했으면 나가라
    useEffect(() => {
        if (isLogin || isRegistCompleted) {
            dispatch(setSelectedIsRegistCompleted());
            navigate('/', { replace: true });
        }
    }, [isLogin, isRegistCompleted, navigate, dispatch]);

    return (
        <Section>
            <form onSubmit={formSubmitHandler}>
                <Control>
                    <label htmlFor="account">계정</label>
                    <input
                        type="text"
                        id="account"
                        required
                        value={userInfo.account}
                        onChange={accountInputHandler}
                    />
                </Control>
                <Control>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={userInfo.password}
                        onChange={passwordInputHandler}
                    />
                </Control>
                <Control>
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
                    <input type="password" id="passwordConfirm" required />
                </Control>
                <Control>
                    <label htmlFor="name">이름</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={userInfo.name}
                        onChange={nameInputHandler}
                    />
                </Control>
                <Control>
                    <label htmlFor="phoneNumber">전화번호</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        required
                        value={userInfo.phoneNumber}
                        onChange={phoneNumberInputHandler}
                        placeholder="-를 빼고 입력해주세요"
                    />
                </Control>
                <Control>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="필수 입력 조건이 아닙니다"
                        value={userInfo.email}
                        onChange={emailInputHandler}
                    />
                </Control>
                <Control>
                    <Button
                        border={true}
                        color={Colors.SkyBlue}
                        style={{
                            border: `1px solid ${Colors.SkyBlue}`,
                            fontWeight: 'bold',
                            fontSize: '15px',
                        }}
                        onClick={searchAddressHandler}
                    >
                        주소 검색하기
                    </Button>
                </Control>
                <Control>
                    <label htmlFor="addressZoneCode">우편번호</label>
                    <input
                        type="number"
                        id="addressZoneCode"
                        required
                        readOnly
                        value={addressInfo.address1}
                    />
                </Control>
                <Control>
                    <label htmlFor="address">주소</label>
                    <input
                        type="text"
                        id="address"
                        required
                        readOnly
                        value={addressInfo.address2}
                    />
                </Control>
                <Control>
                    <label htmlFor="addressDetail">상세주소</label>
                    <input
                        type="text"
                        id="addressDetail"
                        required
                        onChange={addressDetailInputHandler}
                        value={addressInfo.address3}
                    />
                </Control>

                <Actions>
                    <Button
                        style={{
                            color: `${Colors.White}`,
                            fontSize: '15px',
                            fontWeight: 'bold',
                            width: '100%',
                        }}
                        bgColor={Colors.SkyBlue}
                        type="submit"
                    >
                        회원가입
                    </Button>
                </Actions>
            </form>
        </Section>
    );
}
