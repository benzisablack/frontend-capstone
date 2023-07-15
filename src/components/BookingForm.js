import { useState } from "react";

const BookingForm = ({ availableTimes, dispatchOnBookingDateChange, submitForm }) => {

  const today = new Date().toISOString().split('T')[0]
  const [bookingForm, setBookingForm] = useState({
    bookingDate: today,
    bookingTime: '',
    numberOfGuest: 1
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
    submitForm(bookingForm)
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Table reservation</h1>
      <label htmlFor="bookingDate">Choose date</label>
      <input
        type="date"
        id="bookingDate"
        name="bookingDate"
        min={today}
        value={bookingForm.bookingDate}
        onChange={handleOnChange} />
      <label htmlFor="bookingTime">Choose time</label>
      <select id="bookingTime" name="bookingTime" onChange={handleOnChange}>
        {availableTimes.map((times) =>
          <option key={times}>{times}</option>
        )}
      </select>
      <label htmlFor="numberOfGuest">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="numberOfGuest"
        name="numberOfGuest"
        value={bookingForm.numberOfGuest}
        onChange={handleOnChange} />
      <button type="submit">
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm