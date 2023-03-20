import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components/UI/Button';
import { FontStyle } from '../../../components/UI/FontStyle';
import {
    getContactDetail,
    responseContactDetail,
} from '../../../utils/api/Contact/getContactDedatil';
import { CustomerCenterDetailWrapper, GridItem } from './style';

function CustomerCenterDetail() {
    const params = useParams<{ id?: string }>();
    const [contact, setContact] = useState<responseContactDetail>({
        id: 0,
        title: '',
        description: '',
        name: '',
        category: '',
        password: '',
    });
    useEffect(() => {
        (async () => {
            if (params.id) {
                const data = await getContactDetail(params.id);
                setContact(data);
            }
        })();
    }, [params]);

    return (
        <CustomerCenterDetailWrapper>
            <GridItem isSingle={true}>
                <FontStyle>상품 문의</FontStyle>
            </GridItem>
            <GridItem>
                <FontStyle>제목</FontStyle>
                <div>{contact?.title}</div>
            </GridItem>
            <GridItem>
                <FontStyle>작성자</FontStyle>
                <div>{contact.name}</div>
            </GridItem>
            <GridItem isSingle={true} style={{ minHeight: '40vh' }}>
                {contact.description}
            </GridItem>
            <GridItem>
                <div>비밀번호</div>
                <div>
                    <input type="password" />
                    <span> 삭제하려면 비밀번호를 입력하세요</span>
                </div>
            </GridItem>
            <GridItem style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button border={true}>목록</Button>
                <div>
                    <Button border={true}>삭제</Button>
                    <Button color={'#fff'} bgColor={'#84868B'}>
                        수정
                    </Button>
                    {/* 관리자 아이디로 로그인 했을 시 보이기 */}
                    <Button color={'#fff'} bgColor={'#000'}>
                        답변
                    </Button>
                </div>
            </GridItem>
        </CustomerCenterDetailWrapper>
    );
}

export default CustomerCenterDetail;
