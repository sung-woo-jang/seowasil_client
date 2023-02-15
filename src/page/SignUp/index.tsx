import { Actions, Control, Section } from './style';
import DaumPostcodeEmbed, { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';
import { Button } from '../../components/Button/style';

export default function SignUp() {
    const [userInfo, setUserInfo] = useState({
        account: '', // 계정
        password: '', // 비밀번호
        name: '', // 이름
        phoneNumber: '', // 전화번호
        email: '', // 이메일
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
        setUserInfo((prevState) => {
            return { ...prevState, address1: data.zonecode, address2 };
        });
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

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
            setUserInfo((prevState) => {
                return { ...prevState, address3: e.target.value };
            });
        },
    };

    return (
        <Section>
            <form>
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
                        placeholder=""
                        value={userInfo.email}
                        onChange={emailInputHandler}
                    />
                </Control>
                <Control>
                    <button type="button" onClick={handleClick}>
                        주소 검색하기
                    </button>
                </Control>
                <Control>
                    <label htmlFor="addressZoneCode">우편번호</label>
                    <input
                        type="number"
                        id="addressZoneCode"
                        required
                        readOnly
                        value={userInfo.address1}
                    />
                </Control>
                <Control>
                    <label htmlFor="address">주소</label>
                    <input type="text" id="address" required readOnly value={userInfo.address2} />
                </Control>
                <Control>
                    <label htmlFor="addressDetail">상세주소</label>
                    <input
                        type="text"
                        id="addressDetail"
                        required
                        onChange={addressDetailInputHandler}
                        value={userInfo.address3}
                    />
                </Control>
                <Actions>
                    <button
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                            e.preventDefault();
                            console.log(userInfo);
                        }}
                    >
                        회원가입
                    </button>
                </Actions>
            </form>
        </Section>
    );
}
