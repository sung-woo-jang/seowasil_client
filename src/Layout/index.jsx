import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
            <Container fixed>
                <main>
                    <Outlet />
                </main>
            </Container>
        </>
    );
};

export default Layout;
