import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '../../components/UI/Button';
import { RootState } from '../../store';
import { CardHeader, CardTitle, Details, RecentOrders } from './style';

const Notices = () => {
    const { role } = useSelector((state: RootState) => state.auth);
    return (
        <Details>
            <RecentOrders>
                <CardHeader>
                    <CardTitle>공지 사항</CardTitle>
                    {role && (
                        <Button border={true}>
                            <Link to="/notice/write">글쓰기</Link>
                        </Button>
                    )}
                </CardHeader>

                <main>
                    <Outlet />
                </main>
            </RecentOrders>
        </Details>
    );
};

export default Notices;
