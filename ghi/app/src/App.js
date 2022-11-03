import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Navs from './Nav';
import AppointmentList from './Services/AppointmentList';
import TechnicianForm from './Services/TechnicianForm';
import AppointmentForm from './Services/AppointmentForm';
import ServiceHistory from './Services/ServiceHistory';
import CreateModel from './Inventory/AddModel';
import AutomobileList from './Inventory/AutomobileList';
import CreateAuto from './Inventory/AddAuto';
import SalesList from './Sales/SalesList';
import NewCustomerForm from './Sales/NewCustomerForm';
import SaleRecordForm from './Sales/SaleRecordForm';
import NewSalesPersonForm from './Sales/NewSalesPersonForm';
import CreateManufacturer from './Inventory/CreateManufacturers';
import ListManufacturers from './Inventory/ListManufacturers';
import ListVehicleModels from './Inventory/ListVehicleModels';
import SalesPerson from './Sales/SalesPerson';
import Audi from './ManufacturerPages/Audi';
import BMW from './ManufacturerPages/BMW';
import Benz from './ManufacturerPages/Benz';


function App() {
  return (
    <BrowserRouter>
      <Navs />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="audi" element={<Audi />} />
          <Route path="bmw" element={<BMW />} />
          <Route path="benz" element={<Benz />} />
          <Route path="autos">
            <Route index element={<AutomobileList />} />
            <Route path="add" element={<CreateAuto />} />
            <Route path="manufacturers/add" element={<CreateManufacturer />} />
            <Route path="models/add" element={<CreateModel />} />
            <Route path="models" element={<ListVehicleModels />} />
            <Route path="manufacturers" element={<ListManufacturers />} />
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
