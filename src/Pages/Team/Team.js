import React, { useState } from 'react';

import Card from '../../components/Card/Card';
import Square from '../../components/Styling/Square/Square';

import ProfilePicture from '../../assets/avatar.png';

import styles from './Team.module.css';

const Team = props => {
    const [team] = useState({
        bessieBerry: {
            img: ProfilePicture,
            name: 'Bessie Berry',
            fields: {
                employeeId: {
                    label: 'Employee ID:',
                    value: ''
                },
                birthdate: {
                    label: 'Birthdate:',
                    value: ''
                },
                address: {
                    label: 'Address:',
                    value: ''
                },
                status: {
                    label: 'Status:',
                    value: ''
                },
                position: {
                    label: 'Position:',
                    value: ''
                },
                created: {
                    label: 'Created:',
                    value: ''
                },
                updated: {
                    label: 'Updated:',
                    value: ''
                }              
            }
        },
        nickHerasimenka: {
            img: ProfilePicture,
            name: 'Nick Herasimenka',
            fields: {
                employeeId: {
                    label: 'Employee ID:',
                    value: ''
                },
                birthdate: {
                    label: 'Birthdate:',
                    value: ''
                },
                address: {
                    label: 'Address:',
                    value: ''
                },
                status: {
                    label: 'Status:',
                    value: ''
                },
                position: {
                    label: 'Position:',
                    value: ''
                },
                created: {
                    label: 'Created:',
                    value: ''
                },
                updated: {
                    label: 'Updated:',
                    value: ''
                }              
            }
        },
        andreyProkopenko: {
            img: ProfilePicture,
            name: 'Andrey Prokopenko',
            fields: {
                employeeId: {
                    label: 'Employee ID:',
                    value: ''
                },
                birthdate: {
                    label: 'Birthdate:',
                    value: ''
                },
                address: {
                    label: 'Address:',
                    value: ''
                },
                status: {
                    label: 'Status:',
                    value: ''
                },
                position: {
                    label: 'Position:',
                    value: ''
                },
                created: {
                    label: 'Created:',
                    value: ''
                },
                updated: {
                    label: 'Updated:',
                    value: ''
                }              
            }
        },
        glebKuznetsov: {
            img: ProfilePicture,
            name: 'Gleb Kuznetsov',
            fields: {
                employeeId: {
                    label: 'Employee ID:',
                    value: ''
                },
                birthdate: {
                    label: 'Birthdate:',
                    value: ''
                },
                address: {
                    label: 'Address:',
                    value: ''
                },
                status: {
                    label: 'Status:',
                    value: ''
                },
                position: {
                    label: 'Position:',
                    value: ''
                },
                created: {
                    label: 'Created:',
                    value: ''
                },
                updated: {
                    label: 'Updated:',
                    value: ''
                }              
            }
        }
    });

    const cardsArray = [];

    for(let key in team) {
        cardsArray.push({
            id: key,
            name: team[key].name,
            img: team[key].img,
            fields: {
                ...team[key].fields
            }
        });
    };

    const cardsElements = cardsArray.map(card => {
        return (
            <Card key={card.id} img={card.img} name={card.name} fields={card.fields} />
        )
    })

    return (
        <section className={styles.Team}>
            <Square width='40px' height='40px' left='50px' top='165px' />
            <Square width='40px' height='40px' right='0' top='200px' transform='rotate(220deg)' />
            <Square width='40px' height='40px' left='75px' bottom='0' fill='rgb(254, 175, 203)' />
            <h2>Team</h2>
            <div className={styles.CardsContainer}>
                {cardsElements}
            </div>
        </section>
    );
};

export default Team;