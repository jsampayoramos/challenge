import React from 'react';

import Button from '../../../components/UI/Button/Button';
import Circunference from '../../../components/Styling/Circunference/Circunference';

import AugmentedImage from '../../../assets/img-landing.png';

import styles from './AugmentedSection.module.css';

const augmentedSection = props => {
    return (
        <section className={styles.Augmented}>
            <Circunference width='300px' height='300px' bottom='0' right='0' transform='translate(50%, 0)' />
            <div className={styles.SectionContainer}>
                <svg>
                    <line x1='45%' y1='0' x2='55%' y2='0' stroke='#5851EA' strokeWidth='3' />
                </svg>
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
                            <svg>
                                <line x1='0' y1='0' x2='25' y2='0' stroke='#5851EA' strokeWidth='3' />
                                <line x1='27' y1='0' x2='85' y2='0' stroke='#5851EA' strokeWidth='3' />
                            </svg>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa.
                            </p>
                            <Button style={{color: 'white', backgroundColor: '#5851EA'}}>LEARN MORE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default augmentedSection;