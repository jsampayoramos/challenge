import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import About from './About/About';
import FooterMenu from './FooterMenu/FooterMenu';
import Circle from '../components/Styling/Circle/Circle';

import styles from './Layout.module.css';

const Layout = props => {
    const [headerBackground, setHeaderBackground] = useState(false);

    let listenScrollEvent = useCallback(() => {
        if (window.scrollY > window.innerHeight - 30 && !headerBackground) {
            setHeaderBackground(true);
        };
        if (window.scrollY < window.innerHeight - 30 && headerBackground) {
            setHeaderBackground(false);
        };
    }, [headerBackground]);

    useEffect(() => {
        if(props.location.pathname === '/') {
            window.addEventListener('scroll', listenScrollEvent, true);
        }
        if(props.location.pathname !== '/' && !headerBackground) {
            setHeaderBackground(true);
        }
    }, [props.location.pathname, listenScrollEvent, headerBackground]);

    const headerStyle = [styles.Header]
        
    if(headerBackground === true && props.location.pathname === '/') {
        headerStyle.push(styles.HeaderBackground);
    };

    if(props.location.pathname !== '/') {
        headerStyle.push(styles.HeaderBackground);
    }

    let circleElements = (
        <React.Fragment>
            <Circle width='75px' height='75px' left='50px' bottom='150px' />
            <Circle width='40px' height='40px' left='100px' bottom='235px'/>
            <Circle width='40px' height='40px' left='135px' bottom='135px'/>
            <Circle width='75px' height='75px' right='25px' top='25px'/>
        </React.Fragment>
    );
    
    if(props.location.pathname !== '/') {
        circleElements = null;
    } 

    return (
        <React.Fragment>
            <header className={headerStyle.join(' ')}>
                <NavigationBar />
            </header>
            <main className={styles.Main}>
                {props.children}
            </main>
            <footer className={styles.Footer}>
                {circleElements}
                <div className={styles.FooterContainer}>
                    <About />
                    <FooterMenu />
                </div>
                <hr />
                <p>
                    indianpix | All rights reserved 2019
                </p>
            </footer>
        </React.Fragment>
    );
};

export default withRouter(Layout);