import React from 'react';
import OrderingPage from "./pages/OrderingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

function App() {

  const rootPath = "food-order-form"

  return (
    <>
     <BrowserRouter>
         <Routes>
             <Route path={`${rootPath}/`} element={<OrderingPage/>}>
             </Route>
             <Route path="/orderSummary" element={<OrderConfirmationPage/>}>
             </Route>
         </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
