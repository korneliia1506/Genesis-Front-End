import React, { useState, useEffect } from 'react';

import { Footer, Gallery, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('http://api.wisey.app/api/v1/core/preview-courses/')
        .then((response) => response.json())
        .then((json) => {
           setPosts(json);
        });
  }, []);
  return (
   <div className="App">
      <h1>Case App</h1>
   </div>
  );
}


export default App;
