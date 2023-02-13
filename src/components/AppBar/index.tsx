import { YouTube } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppBarWrapper, Right, SNS } from './style';

const AppBar = () => {
    return (
        <AppBarWrapper>
            <div>
                <Button component={Link} to="/login" variant="text" size="small">
                    로그인
                </Button>
                <Button component={Link} to="/signup" variant="text" size="small">
                    회원가입
                </Button>
                <Button component={Link} to="/cart" variant="text" size="small">
                    장바구니
                </Button>
            </div>
            <Right>
                <Link to="/introduction">농장소개</Link>
                <Link to="/notice">공지사항</Link>
                <Link to="/customer_center">고객센터</Link>
            </Right>
            <SNS>
                <Button size="small" variant="text">
                    <YouTube sx={{ color: '#fe0000' }} />
                    <a href="https://www.youtube.com/@user-sl1sq3rt7m" style={{ color: '#000' }}>
                        유튜브
                    </a>
                </Button>
                <Button size="small" variant="text">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/naverBlogLogo.png`}
                        alt=""
                        style={{ width: '20px', paddingRight: '4px' }}
                    />
                    <a href="https://blog.naver.com/wntlsduf" style={{ color: '#000' }}>
                        블로그
                    </a>
                </Button>
            </SNS>
        </AppBarWrapper>
    );
};

export default AppBar;
