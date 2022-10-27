import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Navs from './Nav';
import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import ServiceHistory from './ServiceHistory';
import CreateModel from './AddModel';
import AutomobileList from './AutomobileList';
import CreateAuto from './AddAuto';

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
      </div>
    </BrowserRouter>
  );
}

export default App;
