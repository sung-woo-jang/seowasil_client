import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar';

const Layout = (props) => {
    return (
        <>
            <Container fixed>
                <AppBar />
                <main>
                    <Outlet />
                </main>
            </Container>
        </>
    );
};

export default Layout;
