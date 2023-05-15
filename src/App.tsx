import React from 'react';
import OrderingPage from "./pages/OrderingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

function App() {

  return (
    <>
     <BrowserRouter>
         <Routes>
             <Route path={`${process.env.PUBLIC_URL}`} element={<OrderingPage/>}>
             </Route>
             <Route path={`${process.env.PUBLIC_URL}/orderSummary`} element={<OrderConfirmationPage/>}>
             </Route>
         </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
