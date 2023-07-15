import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/ConfirmedBooking';
import HomePage from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<Bookings />}></Route>
        <Route path="/booking-confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
