import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

import styles from './NavigationBar.module.css';

import logo from '../../../assets/logo.png';

const navigationBar = props => {
    return (
        <nav className={styles.NavigationBar}>
            <img src={logo} alt='logo'></img>
            <ul>
                <NavigationItem path='/'>Home</NavigationItem>
                <NavigationItem path='/absences'>Absences</NavigationItem>
                <NavigationItem path='/employees'>Employees</NavigationItem>
                <NavigationItem path='/newEmployee'>New Employee</NavigationItem>
            </ul>
        </nav>
    );
};

export default navigationBar;