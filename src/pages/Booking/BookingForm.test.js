import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['17:00', '17:30'];
  const submitForm = jest.fn();
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test('should correctly render all fields and their default values', async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId('booking-time-option');
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId('booking-occasion-option');
    const submitButton = screen.getByRole('button');


    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'bookingDate');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'bookingTime');
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'numberOfGuests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasions');
    expect(occasionOptions.length).toBe(2)

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('should successfully submit form with default values', () => {
    const onSubmit = jest.fn();
    render(
      <BookingForm availableTimes={availableTimes} onSubmit={onSubmit} />
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test(
    `should display an error message and disable submit button when number of guests field's value is empty`, () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      );

      const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
      fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
      fireEvent.blur(numberOfGuestsInput);
      const errorMessage = screen.getByTestId('error-message');
      const submitButton = screen.getByRole('button');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
      expect(submitButton).toBeDisabled();
    });
});