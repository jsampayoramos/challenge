import React from 'react';

import styles from './Circle.module.css';

const circle = props => {
    return (
        <div 
            className={styles.Circle}
            style={{
                width: props.width,
                height: props.height,
                top: props.top,
                right: props.right,
                bottom: props.bottom,
                left: props.left,
                transform: props.transform
            }}
        >
        </div>
    );
};

export default circle;