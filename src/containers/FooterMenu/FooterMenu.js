import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import styles from './FooterMenu.module.css';

class FooterMenu extends Component {
    state = {
        menuOne: {
            title: 'Company',
            links: ['Home', 'Features', 'Screenshots', 'Pricing', 'Team']
        },
        menuTwo: {
            title: 'Help',
            links: ['Help Center', "FAQ's", 'Terms and Conditions', 'Privacy', 'Contacts']
        },
        menuThree: {
            title: 'Solutions',
            links: ['Consumer', 'Saas', 'Education', 'Gaming', 'Financial Services']
        }
    }

    render() {
        const linkArray = [];
        for(let key in this.state) {
            linkArray.push({
                id: key,
                title: this.state[key].title,
                links: [...this.state[key].links]
            })
        }

        const linkElements = linkArray.map(el => {
            return (
                <div className={styles.FooterItem} key={el.id}>
                    <h3>{el.title}</h3>
                    <div className={styles.FooterLink}>
                        {el.links.map(link => {
                            return <Link key={link} className={styles.Link} to='#'>{link}</Link>
                        })}
                    </div>
                </div>
            )
        })
        return (
            <div className={styles.FooterMenu}>
                {linkElements}
            </div>
        );
    }
};

export default FooterMenu;