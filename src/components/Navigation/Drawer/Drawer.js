import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

import logo from '../../../assets/logo.png';

import styles from './Drawer.module.css';

const drawer = props => {
    let drawerStyle;
    
    if(props.display) {
        drawerStyle = [styles.Drawer, styles.OpenDrawer];
    } else {
        drawerStyle = [styles.Drawer, styles.CloseDrawer];
    };

    return (
        <React.Fragment>
            <ul className={drawerStyle.join(' ')}>
                <img className={styles.DrawerLogo} src={logo} alt='Logo' />
                <NavigationItem path='/' action={props.action}>Home</NavigationItem>
                <NavigationItem path='/absences' action={props.action}>Absences</NavigationItem>
                <NavigationItem path='/employees' action={props.action}>Employees</NavigationItem>
                <NavigationItem path='/newEmployee' action={props.action}>New Employee</NavigationItem>
            </ul>
        </React.Fragment>
    );
};

export default drawer;