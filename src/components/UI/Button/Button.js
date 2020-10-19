import React from 'react';

import styles from './Button.module.css';

const button = props => {
    return (
        <button style={props.style} className={styles.Button}>
            {props.children}
        </button>
    );
};

export default button;