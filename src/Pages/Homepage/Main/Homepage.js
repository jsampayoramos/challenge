import React from 'react';

import Button from '../../../components/UI/Button/Button';
import AugmentedSection from '../AugmentedSection/AugmentedSection';

import styles from './Homepage.module.css';

const homepage = props => {
    return (
        <React.Fragment>
            <section className={styles.Homepage}>
                <div>
                    <h2>Make Your Team<br />the best it can be</h2>
                    <Button style={{color: '#5851EA', backgroundColor: 'white', margin: 'auto', boxShadow: 'none'}}>Enter</Button>
                </div>
            </section>
            <AugmentedSection />            
        </React.Fragment>
    );
};

export default homepage;