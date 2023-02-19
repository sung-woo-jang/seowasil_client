import { Toolbar } from '@mui/material';
import React from 'react';
import { NavLinks } from './style';

const sections = [
    { id: 1, title: '문그로우', url: 'category/1' },
    { id: 2, title: '파스티기아타', url: 'category/2' },
    { id: 3, title: '에메랄드 그린', url: 'category/3' },
    { id: 4, title: '블루엔젤', url: 'category/4' },
    { id: 5, title: '블루애로우', url: 'category/5' },
    { id: 6, title: '황금주목', url: 'category/6' },
    { id: 7, title: '스카이로켓', url: 'category/7' },
    { id: 8, title: '히버니카', url: 'category/8' },
    { id: 9, title: '에메랄드 골드', url: 'category/9' },
];

const Navbar = () => {
    return (
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
            {sections.map((section) => (
                <NavLinks key={section.id} to={section.url}>
                    {section.title}
                </NavLinks>
            ))}
        </Toolbar>
    );
};

export default Navbar;
