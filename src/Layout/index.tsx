import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
    return (
        <>
            <Container fixed>
                <AppBar />
                <Header />
                <main>
                    <Outlet />
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Layout;
