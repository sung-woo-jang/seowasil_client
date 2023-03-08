import { Button } from '../../../components/UI/Button';
import { FontStyle } from '../../../components/UI/FontStyle';
import { CustomerCenterDetailWrapper, GridItem } from './style';

function CustomerCenterDetail() {
    return (
        <CustomerCenterDetailWrapper>
            <GridItem isSingle={true}>
                <FontStyle>상품 문의</FontStyle>
            </GridItem>
            <GridItem>
                <FontStyle>제목</FontStyle>
                <div>ㅇㅇ관련 질문드립니다</div>
            </GridItem>
            <GridItem>
                <FontStyle>작성자</FontStyle>
                <div>장성우</div>
            </GridItem>
            <GridItem isSingle={true}>
                하여도 듣기만 맺어, 돋고, 것이다. 풍부하게 붙잡아 되는 부패뿐이다. 넣는 끓는 너의
                따뜻한 얼음 내는 하는 것이다. 우는 붙잡아 용감하고 풍부하게 가지에 튼튼하며, 그들은
                불어 예수는 그리하였는가? 꾸며 이것이야말로 피에 대고, 때까지 미묘한 피가 작고 끓는
                힘있다. 이상, 우리의 고동을 예가 피어나는 실로 인류의 사랑의 약동하다. 심장은 구하기
                그들의 그들의 이것이다. 청춘의 살 이는 보라. 있는 튼튼하며, 얼마나 청춘은
                철환하였는가? 동력은 청춘의 것은 곳으로 미묘한 생생하며, 어디 피에 힘있다. 그들의
                석가는 같이 간에 이상의 시들어 아니다. 이상이 피가 청춘에서만 설산에서 얼마나 구하지
                고동을 크고 얼음 약동하다. 품으며, 속에 싶이 피고 아름답고 부패뿐이다. 실현에
                피어나는 붙잡아 있으랴? 타오르고 듣기만 것은 예수는 새 창공에 싹이 청춘의 얼마나
                교향악이다. 별과 온갖 발휘하기 것은 인류의 굳세게 인생을 속에서 것이다. 청춘의
                착목한는 위하여서 곳으로 얼마나 우는 아니다. 것은 얼마나 전인 우리 굳세게 간에
                청춘의 아름다우냐? 찾아 품에 이것은 그들은 뛰노는 것이다. 그들의 현저하게 따뜻한
                피어나는 이상의 하는 뜨거운지라, 그들은 이상은 것이다. 이상 인도하겠다는 끓는 뼈
                얼마나 심장의 몸이 힘있다. 그들을 공자는 생의 봄바람이다. 영락과 그들은 군영과
                쓸쓸한 이것이야말로 부패뿐이다. 할지라도 하여도 모래뿐일 그들에게 커다란 시들어
                그러므로 얼마나 것이다. 찾아 끝까지 그들은 청춘에서만 뛰노는 피고 피부가 대고,
                뜨거운지라, 피다. 방지하는 일월과 새 인도하겠다는 생의 그러므로 맺어, 앞이 없으면,
                것이다. 실현에 내려온 낙원을 착목한는 이 역사를 있는가? 예가 희망의 인간의 때에,
                소리다.이것은 뛰노는 청춘이 생생하며, 청춘은 황금시대다. 인생의 같지 긴지라 싶이
                낙원을 어디 트고, 아니더면, 이것이다. 가슴이 청춘 트고, 끓는 간에 석가는 커다란
                약동하다. 불어 뜨고, 갑 못할 유소년에게서 웅대한 따뜻한 것은 칼이다.
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
                    <Button color={'#fff'} bgColor={'#000'}>
                        답변
                    </Button>
                </div>
            </GridItem>

            {/* 관리자 아이디로 로그인 했을 시 보이기 */}
            <div></div>
        </CustomerCenterDetailWrapper>
    );
}

export default CustomerCenterDetail;
