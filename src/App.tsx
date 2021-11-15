import React, { useState } from 'react';
import './App.css';
import Character from './Character/Character';

function App() {

  const [state, setState] = useState('');

  return (
    Character()
  );
}

export default App;
