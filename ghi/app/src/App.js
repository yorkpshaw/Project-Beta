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
import SalesList from './SalesList';
import NewCustomerForm from './NewCustomerForm';
import SaleRecordForm from './SaleRecordForm';
import NewSalesPersonForm from './NewSalesPersonForm';
import CreateManufacturer from './CreateManufacturers';
import ListManufacturers from './ListManufacturers';
import ListVehicleModels from './ListVehicleModels';
import SalesPerson from './SalesPerson';

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="autos">
            <Route index element={<AutomobileList />} />
            <Route path="add" element={<CreateAuto />} />
            <Route path="add/manufacturer" element={<CreateManufacturer />} />
            <Route path="add/model" element={<CreateModel />} />
            <Route path="list/models" element={<ListVehicleModels />} />
            <Route path="list/manufacturers" element={<ListManufacturers />} />
          </Route>
          <Route path="service">
            <Route index element={<AppointmentForm />} />
            <Route path="list" element={<AppointmentList />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="technician">
            <Route index element={<TechnicianForm />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList />} />.
            <Route path="add" element={<SaleRecordForm />} />
            <Route path="salesperson" element={<SalesPerson />} />
            <Route path="salesperson/new" element={<NewSalesPersonForm />} />
            <Route path="customer" element={<NewCustomerForm />} />
          </Route>
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
