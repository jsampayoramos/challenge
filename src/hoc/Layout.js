import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import About from '../components/About/About';
import FooterMenu from '../containers/FooterMenu/FooterMenu';

import styles from './Layout.module.css';

class Layout extends Component {  
    state = {
        headerBackground: false
    }
    
    componentDidMount() {
        if(this.props.location.pathname === '/') {
            window.addEventListener('scroll', this.listenScrollEvent);
        }
        this.checkLocation();
    }

    componentDidUpdate() {
        this.checkLocation();
    }

    checkLocation() {
        if(this.props.location.pathname !== '/' && this.state.headerBackground === false) {
            this.setState({headerBackground: true});
        };
    }

    listenScrollEvent = event => {
        if (window.scrollY > window.innerHeight - 30 && !this.state.headerBackground) {
            this.setState({headerBackground: true});
        };
        if (window.scrollY < window.innerHeight - 30 && this.state.headerBackground) {
            this.setState({headerBackground: false});
        };
    }

    render() {
        const headerStyle = [styles.Header]
        
        if(this.state.headerBackground === true) {
            headerStyle.push(styles.HeaderBackground)
        };

        return (
            <React.Fragment>
                <header className={headerStyle.join(' ')}>
                    <NavigationBar />
                </header>
                <main className={styles.Main}>
                    {this.props.children}
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
    }
}

export default withRouter(Layout);