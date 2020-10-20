import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from './FooterMenu.module.css';

const FooterMenu = props => {
    const [footer] = useState({
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
    });

    const linkArray = [];
    for(let key in footer) {
        linkArray.push({
            id: key,
            title: footer[key].title,
            links: [...footer[key].links]
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
        );
    });

    return (
        <div className={styles.FooterMenu}>
            {linkElements}
        </div>
    );
}

export default FooterMenu;