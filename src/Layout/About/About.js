import React, { useState } from 'react';

import SocialIcon from '../../components/UI/SocialIcon/SocialIcon';

import logo from '../../assets/logo.png';
import styles from './About.module.css';

const About = props => {
    const [state] = useState({
        facebook: ['fab', 'facebook-f'],
        twitter: ['fab', 'twitter'],
        basketball: ['fas', 'basketball-ball'],
        linkedin: ['fab', 'linkedin-in'],
    })
    
    const iconArray = [];

    for(let key in state) {
        iconArray.push({
            id: key,
            icons: state[key]
        });
    };

    const iconElements = iconArray.map(iconEl => {
        return <SocialIcon icon={iconEl.icons} key={iconEl.id} color='white'/>
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
};

export default About;