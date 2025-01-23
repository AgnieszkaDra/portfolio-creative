import React, { useContext } from 'react';
import NavigationLink from './NavigationLink';
import { AppContext } from '../../context/AppContext';

const Menu = () => {
    const { menu } = useContext(AppContext); 
    const root = menu[0]; 
    const menuIds = root.childIds;

    return (
        <ul className="menu">
            {menuIds.map(id => {
                const menuItem = menu[id]; 
                return (
                    <li key={id}>
                        <NavigationLink id={id} value={menuItem.title} />
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;