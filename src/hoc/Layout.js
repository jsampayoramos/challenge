import React from 'react';

import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import About from '../components/About/About';
import FooterMenu from '../containers/FooterMenu/FooterMenu';

import styles from './Layout.module.css';

const layout = props => {      
    return (
        <React.Fragment>
            <header className={styles.Header}>
                <NavigationBar />
            </header>
            <main className={styles.Main}>
                {props.children}
            </main>
            <footer className={styles.Footer}>
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

export default layout;