import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/db'
import { ChatRoom } from './components/ChatRoom'
import { TitleInput } from './components/TitleInput'
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';


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

  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    console.log(user)
    if (!user) {
      auth.signInAnonymously()
    } else if (!user.displayName) {
      const name = generateName()

      user.updateProfile({
        displayName: name
      })
      setDisplayName(name)

    } else {
      setDisplayName(user.displayName)
    }
  }, [user])



  const onChangeName = useCallback((val) => {
    user.updateProfile({
      displayName: val
    })

    setDisplayName(val)
  }, [user])

  return (
    <div className="App">
      <header className="App-header">
        CHAT <TitleInput onSubmit={onChangeName} value={displayName} />
      </header>
      <section>
        {user ? <ChatRoom /> : null}
      </section>
    </div>
  );
}

export default App;
