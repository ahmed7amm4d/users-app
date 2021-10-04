import React from "react";
import Card from "../UI/Card";
import './UsersList.css'

const UsersList = (props) => {

    return (
        <div>
            {props.users.length === 0 ? <div></div> : 
            <Card className="users">
                <ul>
                    {props.users.map(user => <li key={user.id}>{user.name} ({user.age} years old)</li>)}
                </ul>
            </Card>}
        </div>
    );
};

export default UsersList;