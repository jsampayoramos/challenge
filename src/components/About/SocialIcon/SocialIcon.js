import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialIcon.module.css';

const socialIcon = props => {
    return (
        <div className={styles.SocialIcon}>
            <FontAwesomeIcon icon={props.icon} size='lg' color={props.color} />
        </div>
    );
};

export default socialIcon;