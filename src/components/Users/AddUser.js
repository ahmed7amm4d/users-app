import React, { useState } from "react";
import './AddUser.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (greater than zero).'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onErrorHandle={errorHandler} />}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <div className="input-field">
                        <input type="text" id="username" className="form-input" placeholder=" " autoComplete="off" value={enteredUsername} onChange={usernameChangeHandler} />
                        <label htmlFor="username" className="form-label">Username</label>
                    </div>
                    <div className="input-field">
                        <input type="number" className="form-input" id="age" placeholder=" " autoComplete="off" value={enteredAge} onChange={ageChangeHandler}/>
                    <label htmlFor="age" className="form-label">Age (Years)</label>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;