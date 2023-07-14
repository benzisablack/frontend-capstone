import { useState } from "react";

const BookingForm = () => {

  const [bookingDetail, setBookingDetail] = useState({
    bookingDate: '',
    bookingTime: '',
    numberOfGuest: 0,
    occasion: ''
  })
  const handleOnChange = (e) => {
    const data = { ...bookingDetail };
    data[e.target.name] = data[e.target.value]
    setBookingDetail(data)
  }

  const handleFormSubmit = () => {
    console.log('data', bookingDetail)
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="bookingDate" value={bookingDetail.bookingDate} onChange={handleOnChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="bookingTime">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="numberOfGuest" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm