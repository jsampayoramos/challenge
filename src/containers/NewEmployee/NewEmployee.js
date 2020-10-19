import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import styles from './NewEmployee.module.css';

class NewEmployee extends Component {
    state = {
        employeeId: {
            type: 'input',
            config: {
                type: 'number',
                placeholder : 'Employee ID:'
            },
            value: ''
        },
        name: {
            type: 'input',
            config: {
                type: 'text',
                placeholder : 'Name:'
            },
            value: ''
        },
        birthdate: {
            type: 'input',
            config: {
                type: 'text',
                placeholder : 'Birthdate:'
            },
            value: ''
        },
        address: {
            type: 'input',
            config: {
                type: 'text',
                placeholder : 'Address:'
            },
            value: ''
        },
        status: {
            type: 'input',
            config: {
                type: 'text',
                placeholder : 'Status:'
            },
            value: ''
        },
        position: {
            type: 'input',
            config: {
                type: 'text',
                placeholder : 'Position:'
            },
            value: ''
        },
        created: {
            type: 'input',
            config: {
                type: 'text',
                placeholder : 'Created:'
            },
            value: ''
        },
        updated: {
            type: 'input',
            config: {
                type: 'text',
                placeholder : 'Updated:'
            },
            value: ''
        }
    }
    
    onChangeForm = (event, id) => {
        const stateCopy = {
            ...this.state
        };
        stateCopy[id].value = event.target.value;
        this.setState(stateCopy);
    }

    submitForm = (event) => {
        event.preventDefault();
        //Submit function here
    }

    render() {
        const formData = [];
        for (let key in this.state) {
            if(key !== 'created' && key !== 'updated')
            formData.push({
                id: key,
                config: {
                    ...this.state[key].config
                },
                value: this.state[key].value
            });
        };

        const formElements = formData.map(el => {
            return (<Input
                        key={el.id}
                        config={el.config}
                        value={el.value}
                        action={(event, id) => this.onChangeForm(event, el.id)}
                    />)
        })

        return (
            <div className={styles.NewEmployee}>
                <h2>New Employee</h2>
                <form onSubmit={this.submitForm}>
                    {formElements}
                    <div>
                        <div className={styles.InputContainer}>
                            <Input
                                key='created'
                                config={this.state.created.config}
                                value={this.state.created.value}
                                action={(event, id) => this.onChangeForm(event, 'created')}
                            />
                        </div>
                        <div className={styles.InputContainer}>
                            <Input
                                key='updated'
                                config={this.state.updated.config}
                                value={this.state.updated.value}
                                action={(event, id) => this.onChangeForm(event, 'updated')}
                            />
                        </div>
                    </div>
                    <Button style={{
                        color: 'white',
                        backgroundColor: '#5851EA',
                        margin: '40px auto'}}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    };
};

export default NewEmployee;