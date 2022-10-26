import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
// import SalesList from './SalesList';
// import SalesPersonHistory from './SalesPersonHistory';
// import NewCustomerForm from './NewCustomerForm';
// import SaleRecordForm from './SaleRecordForm';
import NewSalesPersonForm from './NewSalesPersonForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        {/* <SaleRecordForm /> */}
        {/* <NewCustomerForm /> */}
        <NewSalesPersonForm />
        {/* <SalesList /> */}
        {/* <SalesPersonHistory /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
