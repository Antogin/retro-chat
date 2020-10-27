import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/db'
import { ChatRoom } from './components/ChatRoom'
import { SignIn } from './components/SignIn'
import { useModal } from './hooks/useModal'
import { TitleInput } from './components/TitleInput'
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';


const generateName = () => {
  const customConfig = {
    dictionaries: [adjectives, animals],
    separator: '-',
    length: 2,
  };

  const shortName = uniqueNamesGenerator(customConfig);

  return shortName
}

function App() {

  const [user] = useAuthState(auth);

  const { showModal, RenderModal } = useModal()

  useEffect(() => {
    console.log(user)

    if (user) {

    }
  }, [user])

  const signOut = () => {
    auth.signOut()
  }

  return (
    <div className="App">
      <header className="App-header nes-container is-dark">
        <div>CHAT</div> {user ? <button className="nes-btn is-success" onClick={signOut}>Sign Out</button> : null}
      </header>
      <section className="chat-container">
        {user ? <ChatRoom /> : <section className="nes-container is-dark fill">
          <button className="nes-btn is-success" onClick={showModal}>Sign In</button>
        </section>}
      </section>
      <RenderModal title="Sign In Method">
        <SignIn />
      </RenderModal>
      <div id='modal-root' />

    </div>
  );
}

export default App;
