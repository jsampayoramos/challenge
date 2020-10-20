import React, { Component } from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import ToggleButton from '../ToogleButton/ToggleButton';
import Drawer from '../Drawer/Drawer';
import Modal from '../../UI/Modal/Modal';

import styles from './NavigationBar.module.css';

import logo from '../../../assets/logo.png';

class NavigationBar extends Component {
    state = {
        drawer: false
    }

    toggleDrawer = () => {
        this.setState(prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    }
    
    render () {
        return (
            <nav className={styles.NavigationBar}>
                <img src={logo} alt='logo'></img>
                <ToggleButton action={this.toggleDrawer}/>
                {this.state.drawer ? <Modal display={this.state.drawer} action={this.toggleDrawer} /> : null}
                <Drawer display={this.state.drawer} action={this.toggleDrawer}/>
                <ul className={styles.NavBarList}>
                    <NavigationItem path='/'>Home</NavigationItem>
                    <NavigationItem path='/absences'>Absences</NavigationItem>
                    <NavigationItem path='/employees'>Employees</NavigationItem>
                    <NavigationItem path='/newEmployee'>New Employee</NavigationItem>
                </ul>
            </nav>
        );
    }
};

export default NavigationBar;