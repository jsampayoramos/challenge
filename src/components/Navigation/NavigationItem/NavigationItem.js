import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

const navigationItem = props => {
    return (
        <li className={styles.NavigationItem} onClick={props.action}>
            <NavLink
                to={props.path}
                className={styles.NavigationLink}
                exact={true}
                activeClassName={styles.ActiveLink}>
                    {props.children}
            </NavLink>
        </li>
    );
};

export default navigationItem;