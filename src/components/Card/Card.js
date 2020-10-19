import React from 'react';

import styles from './Card.module.css';

const card = props => {
    return (
        <div className={styles.Card}>
            <div className={styles.CardHeader}>
                <img src={props.img} alt='Profile' />
                <div>
                    <p style={{fontWeight: 'bold', color: 'black'}}>{props.name}</p>
                    <p>Employee Id: {props.fields.employeeId.value}</p>
                </div>
            </div>
            <hr />
            <div className={styles.CardBody}>
                <p>Birthdate: {props.fields.birthdate.value}</p>
                <p>Address: {props.fields.address.value}</p>
                <p>Status: {props.fields.status.value}</p>
                <p>Position: {props.fields.position.value}</p>
                <p>Created: {props.fields.created.value}</p>
                <p>Updated: {props.fields.updated.value}</p>
            </div>
        </div>
    );
};

export default card;