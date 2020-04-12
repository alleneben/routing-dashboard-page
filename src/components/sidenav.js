import React from 'react';
import { Link } from 'react-router-dom';








const SideNav = (props) => {


    const route = (path) => {
        props.history.push(path)
    }

    return(
        <aside>
            <ul>
                {/* <li onClick={() => route('/about')}>About</li>
                <li onClick={() => route('/profile')}>Profile</li>
                <li onClick={() => route('/dashboard')}>Dashboard</li>
                <li onClick={() => route('/')}>Logout</li> */}
                <li>
                <Link to="/about"> About</Link>

                </li>
                <li>
                <Link to="/profile"> Profile</Link>

                </li>
            </ul>
        </aside>
    )
}

export default SideNav;