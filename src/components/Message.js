import React from 'react';
import { auth } from './../services/db'

export const Message = (props) => {
    const { text, uid } = props;

    console.log(props)

    const msgClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${msgClass}`}> 
            <p>{text}</p>
        </div>
    )
}