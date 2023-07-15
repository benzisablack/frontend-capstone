import { useState } from "react";
import FormField from "./FormField";

const BookingForm = ({ availableTimes, dispatchOnBookingDateChange, onSubmit }) => {

  const today = new Date().toISOString().split('T')[0]
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];

  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidNumberOfGuestsErrorMessage =
    'Please enter a number between 1 and 10';

  const [bookingForm, setBookingForm] = useState({
    bookingDate: today,
    bookingTime: defaultTime,
    numberOfGuests: minimumNumberOfGuests,
    occasions: occasions[0]
  })

  const isDateValid = () => bookingForm.bookingDate !== '';
  const isTimeValid = () => bookingForm.bookingTime !== '';
  const isNumberOfGuestsValid = () => bookingForm.numberOfGuests !== '';

  const areAllFieldsValue = () => {
    return isDateValid() && isTimeValid() && isNumberOfGuestsValid();
  }

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
    onSubmit(bookingForm)
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <FormField
        label="Date"
        htmlFor="booking-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type="date"
          id="bookingDate"
          name="bookingDate"
          min={today}
          value={bookingForm.bookingDate}
          onChange={handleOnChange} />
      </FormField>
      <FormField
        label="Time"
        htmlFor="booking-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <select
          id="booking-time"
          name="booking-time"
          value={bookingForm.bookingTime}
          required={true}
          onChange={handleOnChange}
        >
          {availableTimes.map(times =>
            <option key={times}>{times}</option>
          )}
        </select>
      </FormField>
      <FormField
        label="Number of guests"
        htmlFor="booking-number-guests"
        hasError={!isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type="number"
          id="numberOfGuests"
          name="numberOfGuests"
          value={bookingForm.numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required={true}
          onChange={handleOnChange} />
      </FormField>
      <FormField
        label="Occasion"
        htmlFor="occasions"
        hasError={false}
        errorMessage=""
      >
        <select
          id="occasions"
          name="occasions"
          value={bookingForm.occasions}
          required={true}
          onChange={handleOnChange}
        >
          {occasions.map(occasion =>
            <option key={occasion}>{occasion}</option>
          )}
        </select>
      </FormField>
      <button
        className="button-primary"
        type="submit"
        disabled={!areAllFieldsValue()}
      >
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm