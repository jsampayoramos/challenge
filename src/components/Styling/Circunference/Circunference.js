import React from 'react';

import CircunferenceImage from '../../../assets/circle.png';

import styles from './Circunference.module.css';

const circunference = props => {
    return (
        <div 
            className={styles.Circunference}
            style={{
                width: props.width,
                height: props.height,
                top: props.top,
                bottom: props.bottom,
                left: props.left,
                right: props.right,
                transform: props.transform
            }}
        >
            <img src={CircunferenceImage} alt='Circunference' />
        </div>
    );
};

export default circunference;