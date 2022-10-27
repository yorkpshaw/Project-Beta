import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Navs from './Nav';
import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import ServiceHistory from './ServiceHistory';
import CreateModel from './AddModel';
import AutomobileList from './AutomobileList';
import CreateAuto from './AddAuto';
// import SalesList from './SalesList';
// import SalesPersonHistory from './SalesPersonHistory';
// import NewCustomerForm from './NewCustomerForm';
// import SaleRecordForm from './SaleRecordForm';
// import NewSalesPersonForm from './NewSalesPersonForm';
import SalesPerson from './SalesPerson';
// import CreateManufacturer from './CreateManufacturers';
// import ListManufacturers from './ListManufacturers';
// import ListVehicleModels from './ListVehicleModels';

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="add/model" element={<CreateModel />} />
            <Route path="add" element={<CreateAuto />} />
          </Route>
          <Route path="service">
            <Route index element={<AppointmentForm />} />
            <Route path="list" element={<AppointmentList />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="technician">
            <Route index element={<TechnicianForm />} />
          </Route>
        </Routes>
        {/* <SaleRecordForm /> */}
        {/* <NewCustomerForm /> */}
        {/* <NewSalesPersonForm /> */}
        {/* <SalesList /> */}
        {/* <SalesPersonHistory /> */}
        <SalesPerson />
        {/* <CreateManufacturer /> */}
        {/* <ListManufacturers /> */}
        {/* <ListVehicleModels /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
