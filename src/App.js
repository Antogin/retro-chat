import React from 'react';
import './App.scss';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/db'
import { ChatRoom } from './components/ChatRoom'
import { SignIn } from './components/SignIn'
import { useModal } from './hooks/useModal'

function App() {

  const [user] = useAuthState(auth);

  const { showModal, RenderModal } = useModal()

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
