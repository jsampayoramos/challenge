import React, { Component } from 'react';

import Card from '../../components/Card/Card';

import ProfilePicture from '../../assets/avatar.png';

import styles from './Team.module.css';

class Team extends Component {
    state = {
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
    }

    render () {
        const cardsArray = [];

        for(let key in this.state) {
            cardsArray.push({
                id: key,
                name: this.state[key].name,
                img: this.state[key].img,
                fields: {
                    ...this.state[key].fields
                }
            });
        };

        const cardsElements = cardsArray.map(card => {
            return (
                <Card key={card.id} img={card.img} name={card.name} fields={card.fields} />
            )
        })

        return (
            <div className={styles.Team}>
                <h2>Team</h2>
                <div className={styles.CardsContainer}>
                    {cardsElements}
                </div>
            </div>
        );
    };
};

export default Team;