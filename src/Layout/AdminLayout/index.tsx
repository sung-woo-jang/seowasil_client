import { Dashboard, Forest, Inventory2, LocalShipping, Menu, People } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../store';
import SearchBar from './../../components/SearchBar';
import {
    AdminWrapper,
    Container,
    MainWrapper,
    NavIconLine,
    Navigation,
    NavItemLink,
    NavList,
    Title,
    Toggle,
    TopBar,
    User,
} from './style';

const navlist = [
    { id: 1, title: '서와실 농원', icon: <Forest />, url: '/' },
    { id: 2, title: '대시보드', icon: <Dashboard />, url: '/admin' },
    { id: 3, title: '상품 관리', icon: <Inventory2 />, url: '/admin/product' },
    { id: 4, title: '사용자 관리', icon: <People />, url: '/admin/customer' },
    { id: 5, title: '배송 관리', icon: <LocalShipping />, url: '/admin/delivery' },
];

const AdminLayout = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleHandler = () => {
        setToggle((prevState) => !prevState);
    };

    const { role } = useSelector((state: RootState) => state.auth);

    return role === 'ADMIN' ? (
        <AdminWrapper>
            <Container>
                <Navigation toggle={toggle}>
                    <ul>
                        {navlist.map(({ id, title, icon, url }) => (
                            <NavList key={id}>
                                <NavItemLink to={`${url}`}>
                                    <NavIconLine>{icon}</NavIconLine>
                                    <Title>{title}</Title>
                                </NavItemLink>
                            </NavList>
                        ))}
                    </ul>
                </Navigation>
                <MainWrapper toggle={toggle}>
                    <TopBar>
                        <Toggle onClick={toggleHandler} toggle={toggle}>
                            <Menu />
                        </Toggle>
                        <SearchBar />
                        <User>
                            <img src={`images/optimize.jpeg`} alt="사진" />
                        </User>
                    </TopBar>
                    <main>
                        <Outlet />
                    </main>
                </MainWrapper>
            </Container>
        </AdminWrapper>
    ) : (
        <Navigate to="/login" />
    );
};

export default AdminLayout;
