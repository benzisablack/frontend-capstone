import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatchOnBookingDateChange, submitForm }) => {

  const navigate = useNavigate();
  const [bookingForm, setBookingForm] = useState({
    bookingDate: '',
    bookingTime: '',
    numberOfGuest: 1,
    occasion: 'Birthday'
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    const data = { ...bookingForm };
    data[name] = value

    if (name === 'bookingDate') {
      dispatchOnBookingDateChange(value)
    }
    setBookingForm(data)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (submitForm(bookingForm)) {
      navigate('/booking-confirmation')
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="bookingDate"
        value={bookingForm.bookingDate}
        onChange={handleOnChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="bookingTime" onChange={handleOnChange}>
        {availableTimes.map((times) =>
          <option key={times}>{times}</option>
        )}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="numberOfGuest" onChange={handleOnChange} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" onChange={handleOnChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit">
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm