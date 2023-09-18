// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import '../components/Nav.scss';
function Nav(props) {
    

    return (
        <>
        
        <div>
            <nav>
                <li><a href="#" onClick={() => props.onToogleChange('home')}>Home</a> </li>
                <li><a href="#" onClick={() => props.onToogleChange('list')}>List Contacts</a> </li>
                <li><a href="#" onClick={() => props.onToogleChange('add')}>Add User</a> </li>
            </nav>
        </div>
        
        </>
    );
}

export default Nav;