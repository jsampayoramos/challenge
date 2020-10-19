import React from 'react';

import styles from './Input.module.css';

const input = props => {
    switch (props.type) {
        case 'input':
            return (
                <input className={styles.Input} {...props.config} value={props.value}/>
            );
        //Add other cases if necessary
        default:
            return (
                <input className={styles.Input} {...props.config} value={props.value} />
            );
    };
};

export default input;