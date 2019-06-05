import React, { Component } from 'react';
import logo from './logo.svg';

import LoginForm from './views/login/LoginForm';

import './App.css';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Login to continue
                        </p>
                        <LoginForm />
                    </header>
                </div>
                );
    }
}

export default App;