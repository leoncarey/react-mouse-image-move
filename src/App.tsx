import React from 'react'
import './App.css'

import { MouseContainer, ChasingElement } from './components'

const styles = {
  mouseContainer: {
    backgroundColor: '#d3eeca',
    width: '100%',
    height: '70vh',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chasingElement: {
    backgroundColor: '#7771c7',
    width: 400,
    height: 400
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Mouse Image Move
      </header>

      <MouseContainer
        styles={styles.mouseContainer}
        chasingElement={
          <ChasingElement chasingComponent={<div>lala</div>} />
        }
      />
    </div>
  );
}

export default App
