import React from 'react';
import { auth } from './../services/db'

export const Message = (props) => {
    const { text, uid, displayName } = props;

    const ownMsg = uid === auth.currentUser.uid;
    const msgClass = ownMsg ? 'right' : 'left';

    return (
        <div className={`message -${msgClass}`}>
            {ownMsg ? null : <div className="displayName">
                {displayName}
            </div>}
            <div className={`nes-balloon from-${msgClass} is-dark`}>
                <p>{text}</p>
            </div>
        </div>
    )
}