import React, { useRef, useState } from 'react';
import { firestore } from "../services/db"
import { Message } from "./Message"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth } from './../services/db'
import firebase from 'firebase/app';

export const ChatRoom = () => {

    const msgRef = firestore.collection('messages')

    const bottom = useRef(null)
    const query = msgRef.orderBy('createdAt', 'desc').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [value, setValue] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()

        const { uid, displayName } = auth.currentUser;

        await msgRef.add({
            uid,
            displayName: displayName,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')

        bottom.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <>
            <main>
                {messages && messages.reverse().map(msg => {
                    return <Message key={msg.id} {...msg} />
                })}

                <div ref={bottom}/>
            </main>

            <form className="chat-form" onSubmit={sendMessage}>
                <input className="chat-input" value={value} onChange={(e) => setValue(e.target.value)} />

                <button type="submit">🐱</button>
            </form>
        </>
    )
}