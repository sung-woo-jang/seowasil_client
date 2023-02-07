import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
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
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </>
    );
};

export default Layout;
