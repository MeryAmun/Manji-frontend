import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import { useSelector } from 'react-redux';
import TransporterScreen from './screens/transporterScreen';
import SigninScreen from './screens/SigninScreen';



function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

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
            <Link to='/' className="">MANJI</Link>
          </div>
          <div className='header-links'>
            <Link to='/cart'>LAN</Link>
            {
              userInfo && <Link to="/profile">{userInfo.name} </Link>
            }
            <Link to="/signin">
              Sign In
  </Link>


          </div>
        </header>
        <aside className="sidebar">
          <h3 className='sidetex'>Transport Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>

            <li className="list">

              <div className="list-items">
                <Link to="/cars">Taxi</Link>
              </div>


              <div className="list-items">
                <Link to="/bikes">Okada</Link>

              </div>

              <div className="list-items">
                <Link to="/cargo">Cargo</Link>

              </div>
              <div className="list-items">
                <Link to="/truck">Caterpiller</Link>

              </div>
            </li>
          </ul>
        </aside>
        <main className='main'>
          <div className="content">
            <Switch>
              <Route path='/' exact={true} component={HomeScreen} />
              <Route path='/transporters/:id' component={TransporterScreen} />
              <Route path='/signin' component={SigninScreen} />

            </Switch>

          </div>
        </main>
        <footer className='footer'>All Rights Reserved &copy;MANJI 2021</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

