import React, { useEffect } from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/db'
import { ChatRoom } from './components/ChatRoom'


function App() {

  const [user] = useAuthState(auth);


  useEffect(() => {
    if(!user) {
      auth.signInAnonymously()
    }
  }, [user])

  return (
    <div className="App">
      <header className="App-header">
        CHAT
      </header>
      <section>
        {user ? <ChatRoom/> : null}
      </section>
    </div>
  );
}

export default App;
