import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { NavbarWrapper, NavItem } from './style';

const Navbar = () => {
    const categories = useSelector((state: RootState) => state.product.categories);

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
