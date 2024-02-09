import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import { StateContextProvider } from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThirdwebProvider activeChain={ Sepolia }>

  <BrowserRouter>
  <StateContextProvider>
   
     <App />
  

  </StateContextProvider>
  </BrowserRouter>

  </ThirdwebProvider>
 
)
