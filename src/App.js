import React from 'react';
import { createGlobalStyle } from 'styled-components'; 
import Navbar from './components/Navbar';
import OrderForm from './components/OrderForm';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0
    }
`

const App = () => {
    return(
        <div>
            <GlobalStyle />
            <Navbar />
            <OrderForm />
        </div>
    )
}

export default App;
 