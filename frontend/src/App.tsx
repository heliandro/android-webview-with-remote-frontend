import React from 'react';
import './App.css';

function App() {

  const callNativeToast = () => {
    if (window?.NativeBridge?.showToast)
      return window.NativeBridge.showToast("Toast Android!!")
      
    alert('Feature desabilitada no navegador!')  
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Aplicação</h1>
      </header>
      <button onClick={callNativeToast}>Chamar função Toast nativa!</button>
    </div>
  );
}

export default App;
