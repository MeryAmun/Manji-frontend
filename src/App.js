import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
function App() {
 
   const openMenu = () => {
     document.querySelector('.sidebar').classList.add('open')
   }
 
   const closeMenu = () => {
     document.querySelector('.sidebar').classList.remove('open')
 
   }
 
   return (
     
     <BrowserRouter>
       <div className='grid-container'>
         <header className='header'>
           <div className='brand'>
             <button onClick={openMenu}>
               &#9776;
             </button>
             <Link to='/'>MANJI</Link>
           </div>
           <div className='header-links'>
           <a href='/cart'>Cart</a>
            <a href="/signin">
                 Sign In
         </a> 
           
 
         </div>
         </header>
         <aside className="sidebar">
           <h3 className='sidetex'>Transport Categories</h3>
           <button className="sidebar-close-button" onClick={closeMenu}>x</button>
           <ul>
           
           <li className="list">
 
             <div className="list-items">
               <a href="/cars">Taxi</a>
             </div>
             
 
             <div className="list-items">
               <a href="/bikes">Okada</a>
              
           </div>
          
             <div className="list-items">
               <a href="/cargo">Cargo</a>
               
             </div>
             <div className="list-items">
               <a href="/truck">Caterpiller</a>
               
             </div>
             </li>
           </ul>
         </aside>
         <main className='main'>
         <div className="content">
         <Switch>
        <Route path='/' exact={true} component={HomeScreen} />
        
          </Switch>
 
         </div>
       </main>
         <footer className='footer'>All Rights Reserved &copy;MANJI 2021</footer>
         </div>
         </BrowserRouter>
     );
   }
   
   export default App;
   
