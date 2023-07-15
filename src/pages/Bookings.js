import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/api';

const updateTimes = (availableTimes, bookingDate) => {
  const response = fetchAPI(new Date(bookingDate));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const navigate = useNavigate();

  const [
    availableTimes,
    dispatchOnBookingDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate('/booking-confirmation');
  };

  return (
    <div className="container">
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnBookingDateChange={dispatchOnBookingDateChange}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Bookings;