import React from 'react';
import { auth } from './../services/db'

export const Message = (props) => {
    const { text, uid, displayName } = props;

    const ownMsg = uid === auth.currentUser.uid;
    const msgClass = ownMsg ? 'sent' : 'received';

    return (
        <div className={`message ${msgClass}`}>
            <p className="message-text">
                {ownMsg ? null : <div className="">{displayName}</div>}
                {text}
            </p>
        </div>
    )
}