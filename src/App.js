import HomePage from './pages/homepage/homepage.component';
import { Routes ,Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';

import './App.css';


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/shop" element={<ShopPage />}/>
            </Routes>
        </>

    );

}

export default App;