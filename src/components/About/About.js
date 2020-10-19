import React, { Component } from 'react';

import SocialIcon from './SocialIcon/SocialIcon';

import logo from '../../assets/logo.png';
import styles from './About.module.css';

class About extends Component {
    state = {
        facebook: ['fab', 'facebook-f'],
        twitter: ['fab', 'twitter'],
        basketball: ['fas', 'basketball-ball'],
        linkedin: ['fab', 'linkedin-in']
    }

    render () {
        const iconArray = [];

        for(let key in this.state) {
            iconArray.push({
                id: key,
                icons: this.state[key]
            });
        };

        const iconElements = iconArray.map(iconEl => {
            return <SocialIcon icon={iconEl.icons} key={iconEl.id}/>
        });

        return (
            <div className={styles.About}>
                <img src={logo} alt='Logo'></img>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes
                </p>
                <div className={styles.SocialIconsContainer}>
                    {iconElements}
                </div>
            </div>
        );
    }
};

export default About;