import React from 'react';

import Button from '../../UI/Button/Button';

import AugmentedImage from '../../../assets/img-landing.png';

import styles from './AugmentedSection.module.css';

const augmentedSection = props => {
    return (
        <section className={styles.Augmented}>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <div className={styles.Container}>
                <div className={styles.AugmentedOne}>
                    <img src={AugmentedImage} alt=''></img>
                </div>
                <div className={styles.AugmentedTwo}>
                    <div>
                        <h2>Augmented reality</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <Button style={{color: 'white', backgroundColor: '#5851EA'}}>LEARN MORE</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default augmentedSection;