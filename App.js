
import Login from './Login'
import Register from './Register'
import FlightSearch from './FlightSearch'
import { Routes, Route } from "react-router-dom";
import FlightList from './FlightList'
import ConfirmTicket from './ConfirmTicket'
// import SeatSelection from './SeatSelection'


import './App.css';

function App() {
  return (
    <div className="App">
   <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/flightsearch" element={<FlightSearch />} />
  <Route path="/flightlist" element={<FlightList />} />
  <Route path="/confirmticket" element={<ConfirmTicket />} />
</Routes>;
      {/* <Login />
      <Register />
      <FlightSearch /> */}
      {/* <FlightList/> */}
      {/* <ConfirmationPage/> */}
      {/* <SeatSelection/> */}
    </div>
  );
}

export default App;
