import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Bookings from './pages/Booking/Booking';
import ConfirmedBooking from './pages/Booking/ConfirmedBooking';
import HomePage from './pages/Home';
import UnderConstruction from './pages/UnderContruction';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<Bookings />}></Route>
          <Route path="/booking-confirmation" element={<ConfirmedBooking />}></Route>
          <Route path="/about" element={<UnderConstruction />}></Route>
          <Route path="/menu" element={<UnderConstruction />}></Route>
          <Route path="/order" element={<UnderConstruction />}></Route>
          <Route path="/login" element={<UnderConstruction />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
