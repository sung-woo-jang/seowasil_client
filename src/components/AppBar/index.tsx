import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { YouTubeIcon } from '../../icons';
import { RootState } from '../../store';
import { logOut } from '../../store/slice/authSlice';
import { Button } from '../UI/Button';
import { Flex } from '../UI/Flex';
import { AppBarWrapper, Right, SNS } from './style';

const AppBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogin } = useSelector((state: RootState) => state.auth);

    const logoutHandler = () => {
        dispatch(logOut());
        navigate('/', { replace: true });
    };

    return (
        <AppBarWrapper>
            <div>
                <Button>
                    {isLogin ? (
                        <div onClick={logoutHandler}>로그아웃</div>
                    ) : (
                        <Link to="/login">로그인</Link>
                    )}
                </Button>
                <Button>
                    <Link to="/signup">회원가입</Link>
                </Button>
            </div>
            <Right>
                <Link to="/introduction">농장소개</Link>
                <Link to="/notice">공지사항</Link>
                <Link to="/customer_center">고객센터</Link>
            </Right>
            <SNS>
                <Button>
                    <Flex>
                        <YouTubeIcon />
                        <a
                            href="https://www.youtube.com/@user-sl1sq3rt7m"
                            style={{ color: '#000' }}
                        >
                            유튜브
                        </a>
                    </Flex>
                </Button>
                <Button>
                    <Flex>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/naverBlogLogo.png`}
                            alt=""
                            style={{ width: '20px', paddingRight: '4px' }}
                        />
                        <a href="https://blog.naver.com/wntlsduf" style={{ color: '#000' }}>
                            블로그
                        </a>
                    </Flex>
                </Button>
            </SNS>
        </AppBarWrapper>
    );
};

export default AppBar;
