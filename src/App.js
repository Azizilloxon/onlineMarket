import HomePage from './pages/homepage/homepage.component';
import { Routes ,Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';
import React from 'react';
import { auth } from './firebase/firebase.utils';


class App extends React.Component{

    constructor(){
        super();

        this.state={
            currentUser:null
        }
    }

    unubscribeFromAuth=null;

    componentDidMount(){



        this.unubscribeFromAuth=auth.onAuthStateChanged(user=>{
            this.setState({currentUser:user});

            console.log(user);
        });
    }

    componentWillUnmount(){
        this.unubscribeFromAuth();
    }

    render(){

        return (
            <>
                <Header currentUser={this.state.currentUser}/>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/shop" element={<ShopPage />}/>
                    <Route path="/signin" element={<SignInAndSignUpPage/>}/>
                </Routes>
            </>
    
        );
    }

    
}

export default App;