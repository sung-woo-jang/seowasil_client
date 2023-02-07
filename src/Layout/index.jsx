import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Header from '../components/Header';

const Layout = (props) => {
    return (
        <>
            <Container fixed>
                <AppBar />
                <Header />
                <main>
                    <Outlet />
                </main>
            </Container>
        </>
    );
};

export default Layout;
