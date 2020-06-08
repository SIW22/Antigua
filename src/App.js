import React from 'react';
import routes from './config/routes'
import Scroll from './components/Scroll'
import Compass from './components/Compass'
import './App.css';

function App() {
  return (
    <div className="App">
      { routes }
    </div>
  );
}
 
export default App;
