import React from 'react';
import Home from './pages/Home';
import Exp from './pages/Exp';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './pages/Header';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  


  return (
    <BrowserRouter>
      <div className="container min-h-screen relative bg-blue-200 px-4 py-0 flex justify-center">
      
      <Route exact path='/' component={Home}/>
      <Route exact path='/experience' component={Exp}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/projects' component={Projects}/>

      


      <Header/>
      </div>
    </BrowserRouter>
  );
}

export default App;
