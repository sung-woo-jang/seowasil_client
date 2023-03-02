import { Outlet } from 'react-router-dom';

import { Details } from './style';

function CustomerCenter() {
    return (
        <Details>
            <Outlet />
        </Details>
    );
}

export default CustomerCenter;
