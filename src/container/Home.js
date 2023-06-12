import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from './Dashboard';
import Product from '../components/Product';
import Success from '../components/Success';
import Cart from '../container/Cart';
import Checkout from '../container/Checkout';

const Home = ()=>{
    return ( 
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product/:id" element={<Product /> } />
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/checkout/" element={<Checkout/>} >
                    <Route path="" element={<Checkout/>} />
                    <Route path=":id" element={<Checkout/>} />
                </Route>
                <Route path="/success" element={<Success />}/>
            </Routes>
        </>
    )
}

export default Home;