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

        if (value === '') {
            return
        }

        await msgRef.add({
            uid,
            displayName: displayName,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')

        bottom.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="chat-room">
            <section className="nes-container is-dark">
                <section className="message-list">
                    {messages && messages.reverse().map(msg => {
                        return <Message key={msg.id} {...msg} />
                    })}
                    <div ref={bottom} />
                </section>
            </section>
            <form className="chat-form" onSubmit={sendMessage}>
                <div className="nes-field d-flex">
                    <input type="text" id="name_field" className="nes-input" placeholder="Message" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type="submit" className="nes-btn is-primary">
                        <span role="img" aria-label="rocket">🚀</span>
                    </button>
                </div>
            </form>
        </div>
    )
}