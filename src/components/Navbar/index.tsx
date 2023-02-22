import { Toolbar } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { getCategories } from '../../utils/api/getCategories';
import { NavItem } from './style';

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
                <Link key={id} to={`/category/${id}`}>
                    <NavItem>{name}</NavItem>
                </Link>
            ))}
        </Toolbar>
    );
};

export default Navbar;
