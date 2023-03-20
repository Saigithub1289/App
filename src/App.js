import './App.css'
import {Router} from '@reach/router'
import { useThemeHook } from './GlobalComponents/ThemeProvider';

import Cart from './Pages/Cart';
 import ProductDetails from "./Pages/ProductDetails";
import Header from './components/Header';
 import SignIn from "./Pages/SignIn";
 import Register from "./Pages/Register";
 import Home from './Pages/Home1';
 import MyAccount from "./Pages/MyAccount";



function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
     
      <Header/><br/>  
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
     
    </main>
  );
}

export default App;