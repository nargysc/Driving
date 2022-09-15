import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import './images/uber1.png'

const App = () => {
  
  return (
    <div className='wrapper-page'>
        <div className='wrapper-page__container'>
          <h1 className='wrapper-page__title'>Hello</h1>
          <img src="images/uber1.png" alt=""/>
          <Form />
        </div>
    </div>
  )
};

export default App;