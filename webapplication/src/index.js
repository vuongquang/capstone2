import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import appReducers from './reducers/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RegisterPage from './pages/main/RegisterPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NotFoundPage from './pages/main/NotFoundPage'
import WelcomePage from './pages/main/WelcomePage'
import LoginPage from './pages/main/LoginPage'
import AdministratorHomePage from './pages/administrator/AdministratorHomePage'
import ShopOwnerHomePage from './pages/shopOwner/ShopOwnerHomePage'

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
 )
 
ReactDOM.render(
    <Provider store={store}>
        <WelcomePage/>
        <Route name='AdministratorHomePage' path={`/AdministratorHomePage`} component={AdministratorHomePage} />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

