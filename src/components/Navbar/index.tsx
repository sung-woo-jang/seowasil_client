import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { getCategories } from '../../utils/api/getCategories';
import { NavbarWrapper, NavItem } from './style';

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.product.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <NavbarWrapper>
            {categories.map(({ id, name }) => (
                <Link key={id} to={`/category/${id}`}>
                    <NavItem>{name}</NavItem>
                </Link>
            ))}
        </NavbarWrapper>
    );
};

export default Navbar;
