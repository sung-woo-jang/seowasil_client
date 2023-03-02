import { Outlet } from 'react-router-dom';

import { Details } from './style';

function CustomerCenters() {
    return (
        <Details>
            <main>
                <Outlet />
            </main>
        </Details>
    );
}

export default CustomerCenters;
