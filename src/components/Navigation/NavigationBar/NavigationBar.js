import React, { useState } from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import ToggleButton from '../ToogleButton/ToggleButton';
import Drawer from '../Drawer/Drawer';
import Modal from '../../UI/Modal/Modal';

import styles from './NavigationBar.module.css';

import logo from '../../../assets/logo.png';

const NavigationBar = props => {
    const [drawer, setDrawer] = useState(false);

    return (
        <nav className={styles.NavigationBar}>
            <img src={logo} alt='logo'></img>
            <ToggleButton action={() => setDrawer(prevState => !prevState)}/>
            {drawer ? <Modal display={drawer} action={() => setDrawer(prevState => !prevState)} /> : null}
            <Drawer display={drawer} action={() => setDrawer(prevState => !prevState)}/>
            <ul className={styles.NavBarList}>
                <NavigationItem path='/'>Home</NavigationItem>
                <NavigationItem path='/absences'>Absences</NavigationItem>
                <NavigationItem path='/employees'>Employees</NavigationItem>
                <NavigationItem path='/newEmployee'>New Employee</NavigationItem>
            </ul>
        </nav>
    );
} 

export default NavigationBar;