import React from 'react';
import { auth } from './../services/db'
import firebase from 'firebase/app';

export const SignIn = ({ closeModal }) => {

    const signInGitHub = async () => {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signOut()
        const result = await auth.signInWithPopup(provider);
        closeModal()
    }

    const signInGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signOut()
        const result = await auth.signInWithPopup(provider);
        closeModal()
    }
    return (
        <div className="sign-in">
            <button className="nes-btn" onClick={signInGitHub}>
                <i className="nes-icon github is-large" />
            </button>
            <button className="nes-btn" onClick={signInGoogle}>
                <i className="nes-icon google  is-large" />
            </button>
        </div>
    )
}