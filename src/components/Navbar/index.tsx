import { Toolbar } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getCategories } from '../../utils/api/getCategories';
import { NavLinks } from './style';

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.product.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    return (
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
            {categories.map(({ id, name }) => (
                <NavLinks key={id} to={`category/${id}`}>
                    {name}
                </NavLinks>
            ))}
        </Toolbar>
    );
};

export default Navbar;
