import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/api';
import '../styles/bookings.css'

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const navigate = useNavigate();

  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

  const onSubmit = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate('/booking-confirmation');
  };

  return (
    <div className="container">
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Bookings;